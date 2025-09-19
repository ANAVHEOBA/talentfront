const API = process.env.NEXT_PUBLIC_API_URL!;

export const userApi = {
  /* ---------- helpers that map to REAL backend routes ---------- */

  // start Google OAuth flow – just redirect browser
  startGoogle: () => {
    window.location.href = `${API}/api/user/google`;
  },

  /* ---------- helpers for NOT-YET-IMPLEMENTED routes ----------
  me: async () => { … },
  logout: async () => { … },
  -------------------------------------------------------------- */
};