import dotenv from "dotenv";

dotenv.config();

export const serviceAccount = {
  "type": process.env.SA_TYPE,
  "project_id": process.env.SA_PROJECT_ID,
  "private_key_id": process.env.SA_PRIVATE_KEY_ID,
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6P6BMhe9GcnHA\nVQG5EA50LmL9G1dBThisYuYuTmXWOjjVxJbNgJoKnV7rnXyH5WrZOfhr+on2d/ey\n5Hh/5w8YFjbpYqY95TAX3BrMALJFz2tp/x4JDpV5YiptknS1TYBkC9Qi7l42Y0hZ\niM1+Du3c+9HU7sqQYqnA39M7tfUiysA6hLzcD3DbYPAoZ4rzpAdkm5aJqlR5IMkW\nrf0+m+eJUAoRXqwJX0b5NIdTAM3umx/YKcZh2gyhQayc7ElkQ8NrF8NZg5q7VJa+\n3vbX7hqTTb17VOpWd29C/pMvURRZd6mxwNwokXjMfA4aR4DrWZzt9U5Zp70r6K14\nq1ccBRlTAgMBAAECggEABi3/RRq6jjVU5eNMK9ZHDH7PhQNnuUB8nBep+IZcZafH\n4/viXw4xzkFbeWjfzWiEy5FbV0XYVwey/coL336Mpylxh/vgdTRKDLieYP9y6tMP\nhtRSrE1CE2V47+rImY1pQaiM0N3k3Vwc9e+Oleyr4sWuOCj2KqVDaaVjjlsit5VB\nDyat5DCj++vg/Yit8oOWSNvJ4R1t6Lym2UCQmSwBoIVLzTDVWSyFnIy4ARFFBg34\nMNW8NHz2z7qT+kC3G0iICZj8koJSb2CJI5kE3x4dEFgGvxP4/uTAM4vyirgQEnTJ\n7KuTCQqEtBYTxjGPNxC/F8gPJibTHiqaL6ErC/O5sQKBgQDviVtIATUY9DNtTx+i\n92B5up+PHorrlJwY6d1JUE/BHXyHrY0aFC7QsU4I62NLfeOmMj27KoFOX1taUaCM\nq+EqSY1jiz/+8Xn4WqicN72+x1DprdpwFm5yWKI08QZ8IQcJKPUOeF/yCbVRb3Rn\nveQqGOKI03RgSRXS5clA1AZLAwKBgQDHDKrkxV0eccKQwD5fVsr261+3fgpkdVEc\n95y+Umm5OZ/J6U55pWKFk7zAtf1ygkJOhhXVJxSLFPDGZOEIeoCy5febJCjF6WiY\n169h2ZVKBl7EQA+haRfekMCLX1xWWWuULX99y8teTxNG2SuU9D9VdLHjsloQTgxS\nkgRxY4L/cQKBgQDTkoEbwmVB20ApRn/tE48VNe+FHDccCbEumDIqdVNcgUzjEjnV\nVQpcrp78ZdzYayNOQoYf8VUxAizQQ9UJKy/AiCLoT7CA4I0Y/gp7oQhpn+cp37NW\n2ZlISl1LYbCWpx1ty81XsJ8eS9DpUwaAM0t6m2xL6mmaOjOaifgO2LeOPQKBgCJh\nlcMeNA9mJu1Jx3xASZ6M2WOgabsgaHpQasqVAZ30zhzaJ6vrXTEla5z90mFNDpbx\noiPHNE0xuMUL97K3NjOwdSxe+ov03RRJbQnBw3+dyhCr4AdJV84hwqBQQGrJ10Mo\n+LSJ1v7bOcErEdQQvD/OgEuMKvJWCNraTdooDiCBAoGAVvxXYSCGbbBlsak8/zJv\nMwOuuOiJ/kCOe8Ua9TG+QMI8CPqdFBg4G1DxcITT4TNOl1NqWCTf/ihLaPW1IMVq\npaIL17ocOmEJFrioXYYQuzt4qUrkifaBxKLEqJTbArSs45CIPRWqc7PUg1SMBg9O\nvWde4Ps2A4eMA4g2M3aJFck=\n-----END PRIVATE KEY-----\n",
  "client_email": process.env.SA_CLIENT_EMAIL,
  "client_id": process.env.SA_CLIENT_ID,
  "auth_uri": process.env.SA_AUTH_URI,
  "token_uri": process.env.SA_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.SA_AUTH_PROVIDER_CERT_URL,
  "client_x509_cert_url": process.env.SA_CLIENT_CERT_URL,
  "universe_domain": process.env.SA_UNIVERSE_DOMAIN,
}