import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtUtil {
    
    // Secret key used to sign the JWT
    private static final String SECRET_KEY = "your_secret_key_here";
    
    // JWT expiration time (in milliseconds)
    private static final long EXPIRATION_TIME = 86400000; // 1 day
    
    // Method to generate a JWT token
    public static String generateToken(String subject) {
        // Set token expiration time
        Date expiration = new Date(System.currentTimeMillis() + EXPIRATION_TIME);
        
        // Build JWT token
        String token = Jwts.builder()
                .setSubject(subject) // Subject/username
                .setExpiration(expiration) // Expiration time
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY) // Sign with secret key
                .compact();
        
        return token;
    }
    
    // Method to validate and extract claims from a JWT token
    public static Claims extractClaims(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY) // Verify with secret key
                .parseClaimsJws(token) // Parse the token
                .getBody(); // Extract claims
        
        return claims;
    }
    
    // Method to check if a JWT token is expired
    public static boolean isTokenExpired(String token) {
        Date expiration = extractClaims(token).getExpiration();
        return expiration.before(new Date());
    }
}
