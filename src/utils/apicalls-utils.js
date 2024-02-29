const fetchActors = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/actors')
  const responseData = await response.json()
  return responseData
}
export { fetchActors }
