using System;
using System.Security.Claims;

namespace API.Extensions
{
	public static class ClaimsPrincipalExtensions
	{
		public static string GetUsername(this ClaimsPrincipal user)
		{
            return user.FindFirst(ClaimTypes.Name)?.Value; // User is a build in ClaimsPrincipal
        }

        public static string GetUserId(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value; // User is a build in ClaimsPrincipal
        }
    }
}

