const dotenv = require("dotenv");

dotenv.config();

const serviceAccount = {
  "type": process.env.SA_TYPE,
  "project_id": process.env.SA_PROJECT_ID,
  "private_key_id": process.env.SA_PRIVATE_KEY_ID,
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCcmBxpavXlp40m\n7erUhPPWiGHdw5biL/iSVJHgZHmk74R52AVwa/7NTA6gqkQ3xakeNmKQs7laumwQ\nHo5ux9ri2gvZZNi8hSuNeCKc6/siuwBGu7/dti7yQ+UcjS3XbPS+ffYCZoIM0exw\nAfXBeR+uxbneLtIyZSDVWiYCOwdJJcfUi2yXpIfsJxTuuXzOxTn2SprLQhRtrgp7\nqSjMDl7XTaMhYhf5OtuLsbIINRo3I0IqpQHjRLo/0bnx2nOz4pvFWvZsrbYEBmwD\ng07CMBIh/N/frnDhfbuaYDLbwh9o+WmHEZFtsiZ9AGteC/ORmojjyZ0FqYosVu9C\n38bJKZh5AgMBAAECggEACebUZRYOVmcx1bRVlPqTMI2PIqarc8H0xcvzLW0tA/Dh\nP5MZRPKPOgwFIMOjbKNi/jYSJXQ31DTVgG9uMjMQ9Cc1eJmX2tPQ3TErfyCs0JVi\nfxaAG1TZwxfn9NY4f9az4xez5pL0xjq/6JU3JPSzvClkh1gOkoEygksg/CMfYtCX\nb6tE1L98Gmrlxa1CbLia8C806y+8xPkSDJckDp7pticEUkbAmB3a3dnZ9omziXgQ\nM1DO16CeIapzZYoQ/7eR0XvIx5exTxxkNrXuRB3gd/dtlrnJCMjjEbDPXSwB0Ps5\nCLXht8Qtbf5hWrgAEnSrvxqsYHu1rEsua5XkHnwlwQKBgQDKWoDql+WDNmMNVauT\n87o6jGjt5xqGGl3FEl/z/aUMz39jmjjzsyBz/Yckga4pX6EgJbVBnbNG0IqBLxA6\nIHFbUS0yEaFassieaxN59VOKAoE0U1iS7jujpusnxQvXdjqR5EShay2+UHr6Mdc0\nHnsXmf+/Fktl8VA9cIuqdMK3TwKBgQDGG/ltPb/0SJt+LCQkiFKt0gbrggN7QSlK\nAO84Z268d3Onud/SThs1aU2nM0YSQI1lhGFJI/7PN2WMxuZ8LxU78N4PREkWsj+T\nFlPZHyNqHAeuoKL6dJ9CybQ8ol1i0k+FWraMUzQGL77Pf6TCwec2vQlnn8t5unqq\nfBHnrFrBtwKBgDO+DLTv/loc8BsayvLcIcSS3snmjFu6JjwcRLjpJOkvrc1URDfc\nl/HQ5FurZVNjBppnyf9rScpTzPbXh/i1DwdgrIPfCjlc+fu4OZS37JKfrVYp8b4w\neMOSDRNwSWTg8H0Zt4rnEx1VCv0q/XJwUN1qHYFJPCJnIDN1seD2Vkv1AoGBAJ4O\nbZcBgCdm0l/82a0n8kbp3UmCRkLM/yMi0bj/lLLa3rQ/sNn6JO0dIa43Uz12sRkA\nYBnZlQ9AFE4X1oXXjqpvBsvJYEKyXdR9KNJ+bGPZDyv8z2rhJrtDcAA8TiNsxbMQ\nZ7pXG5ef+i1UmmAkEdNzSJCbRdzNsdZY/HQI57PLAoGBAKeiLHkNjPHpQ6jX60On\ngqoNe8doN+BckgXLnS7dtxPV6uIvdDM4lYqekfVUUl8G51Esv00lb4ja6ZBqBobd\naoo7l14RYxyoIqyertzKGGLb8eh9r+bOo5DR0u5mkWtOcXAcYtE8FoWgmMebKm5V\neiwdxrnQC9dHTGlNOnxy95HE\n-----END PRIVATE KEY-----\n",
  "client_email": process.env.SA_CLIENT_EMAIL,
  "client_id": process.env.SA_CLIENT_ID,
  "auth_uri": process.env.SA_AUTH_URI,
  "token_uri": process.env.SA_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.SA_AUTH_PROVIDER_CERT_URL,
  "client_x509_cert_url": process.env.SA_CLIENT_CERT_URL,
  "universe_domain": process.env.SA_UNIVERSE_DOMAIN,
}

module.exports = { serviceAccount }
