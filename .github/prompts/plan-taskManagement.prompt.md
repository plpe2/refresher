# Plan: Task Management App Improvement Strategy

## Overview

Improve the task management application across three dimensions: **security hardening**, **code quality/robustness**, and **feature enhancement**. This is a POC project, so improvements are balanced across all areas rather than production-grade hardening.

**Recommended approach:** Implement in phases — security first (foundation), then quality improvements, then features.

---

## Phase 1: Security Hardening (Foundation)

**Why first:** These are foundational issues that affect everything else.

### Steps

1. **Password hashing** – Replace plain-text storage with bcryptjs (add to dependencies)
   - Update `/app/api/v1/login/route.ts` to hash passwords before storing and compare with bcrypt
   - Update `/app/api/v1/users/route.ts` (registration endpoint) to hash incoming passwords
   - Modify login logic to use `bcrypt.compare()` instead of direct string comparison

2. **Environment-based configuration** – Remove hardcoded URLs
   - Create `.env.local` template with `NEXT_PUBLIC_API_URL` and `JWT_SECRET`
   - Update `context/jwt/auth-provider.tsx` to use `process.env.NEXT_PUBLIC_API_URL` instead of hardcoded `http://localhost:3000`
   - Document required environment variables

3. **Input validation** – Add schema validation to API endpoints
   - Add `zod` as validation library
   - Create validation schemas in `lib/validation.ts` for login, registration, task creation/update
   - Update `/app/api/v1/login/route.ts`, `/app/api/v1/users/route.ts`, `/app/api/v1/task/route.ts` to validate before database operations
   - Return 400 errors for invalid input

4. **Rate limiting on login** – Basic protection against brute force
   - Add simple in-memory or Redis-backed rate limiting to `/app/api/v1/login/route.ts`
   - Could use `express-rate-limit` pattern or simple rate-limit library for Next.js
   - Return 429 (Too Many Requests) after threshold exceeded

---

## Phase 2: Code Quality & Robustness

### Steps

5. **Fix and document API endpoints** – Clarify purpose and responses
   - Fix `/app/api/v1/task/[taskId]` GET endpoint: currently just returns ID, should fetch task by ID from DB
   - Add consistent error handling to all endpoints (try-catch, proper HTTP status codes)
   - Document expected request/response formats in JSDoc comments

6. **Improve error handling** – Make endpoints resilient
   - Add error handling middleware or wrapper for API routes
   - Return structured error responses (e.g., `{ error: "message", code: "ERROR_CODE" }`)
   - Handle database connection errors gracefully

7. **Add request/response logging** – Debug-friendly
   - Create `lib/logger.ts` utility for structured logging
   - Log API requests (endpoint, method, user ID if auth) and errors
   - Helps monitoring during development/POC phase

8. **Disable experimental React compiler** (if causing issues)
   - Remove `compiler: { react: true }` from `next.config.ts`
   - Not necessary for a POC; can re-enable later if performance is needed

---

## Phase 3: Features & Enhancements

### Steps

9. **Pagination for tasks & users** – Better UX at scale
   - Add `limit` and `offset` query parameters to `/api/v1/task` and `/api/v1/users`
   - Update hooks (`hooks/api/task/task.ts`, `hooks/api/users/users.ts`) to pass pagination params
   - Update pages to display pagination controls

10. **Improved filtering & search** – Leverage existing infrastructure
    - Enhance `/api/v1/task` GET to support filtering by status, date range, user
    - Add filtering UI to `sections/Task/SearchFilters.tsx`
    - Document filter query parameters in API route

11. **Task sorting options** – Useful for task management
    - Add `sortBy` parameter (date, status, title) to `/api/v1/task` GET
    - Update task list display to reflect sorting

12. **User-friendly timestamps** – Show "time ago" instead of raw dates
    - Add `date-fns` or `dayjs` library for formatting
    - Update task/user display components to show relative timestamps

---

## Relevant Files to Modify

**Security Phase:**

- `app/api/v1/login/route.ts` – Hash comparison, rate limiting
- `app/api/v1/users/route.ts` – Password hashing on registration
- `context/jwt/auth-provider.tsx` – Environment-based URLs
- `lib/validation.ts` (new) – Zod schemas
- `.env.local` (new) – Environment variables

**Quality Phase:**

- `app/api/v1/task/[taskId]/route.ts` – Fix GET endpoint
- `lib/logger.ts` (new) – Logging utilities
- All API route files – Error handling
- `next.config.ts` – Disable experimental compiler

**Features Phase:**

- `app/api/v1/task/route.ts` – Add pagination, filtering, sorting
- `app/api/v1/users/route.ts` – Add pagination
- `hooks/api/task/task.ts` – Update fetch calls
- `hooks/api/users/users.ts` – Update fetch calls
- `sections/Task/SearchFilters.tsx` – Enhanced filtering UI
- Task/User display components – Formatted timestamps

---

## Verification

1. **Security Phase:**
   - Attempt login with password; verify it's hashed in database (not plain text)
   - Provide invalid credentials; verify login fails
   - Test with missing env variables; verify graceful error
   - Attempt multiple login requests; verify rate limit kicks in

2. **Quality Phase:**
   - Test all API endpoints with invalid input (missing fields, wrong types); verify 400 responses
   - Check browser console/server logs for structured error logs
   - Verify `/api/v1/task/[taskId]` GET returns complete task data
   - Test database connection failure; verify proper error response

3. **Features Phase:**
   - Test pagination: fetch tasks with `limit=5&offset=0`; verify returns 5 tasks
   - Test filtering: fetch tasks with `status=pending`; verify only pending tasks returned
   - Test sorting: fetch tasks with `sortBy=date`; verify correct order
   - Verify timestamps display as "2 hours ago" instead of raw date strings

---

## Dependencies to Add

- `bcryptjs` – Password hashing
- `zod` – Input validation
- `next-rate-limit` or `express-rate-limit` – Rate limiting
- `date-fns` or `dayjs` – Timestamp formatting (optional for Phase 3)

---

## Decisions & Scope

**Included:**

- Password security with bcryptjs (industry standard)
- Input validation with Zod (type-safe, integrates with TS)
- Basic in-memory rate limiting (sufficient for POC)
- Pagination/filtering on main endpoints
- Error handling and logging
- Timestamp formatting

**Excluded (not needed for POC):**

- Advanced security (OAuth, MFA, CSRF)
- Database optimization (indexes, query optimization)
- Frontend state management refactor (Redux/Zustand)
- Email verification, password reset
- Comprehensive test suite (covered by manual verification)

**Dependencies on Phase Order:**

- Phase 1 must complete before Phase 2 (need validated inputs)
- Phase 2 and 3 can run in parallel once Phase 1 is done
- Recommended: complete Phase 1 → Phase 2 → Phase 3 for coherence
