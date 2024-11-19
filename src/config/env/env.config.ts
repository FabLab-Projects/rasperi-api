export const getEnvFilePath = () => {
  const environment = process.env.NODE_ENV || 'development'
  return `.env.${environment}.local`
}
