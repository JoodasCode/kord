'use client';

/**
 * A utility function to mark a component as client-side
 * This is useful for components that need to use client-side features
 * like event handlers, hooks, etc.
 */
export function useClient() {
  return true;
}

/**
 * A utility function to get a formatted user name from user data
 * @param user The user object from Supabase
 * @returns A formatted user name
 */
export function getUserDisplayName(user: any) {
  if (!user) return "there";
  
  if ('user_metadata' in user && user.user_metadata?.full_name) {
    return user.user_metadata.full_name;
  }
  
  if (user.email) {
    return user.email.split('@')[0];
  }
  
  return "there";
}
