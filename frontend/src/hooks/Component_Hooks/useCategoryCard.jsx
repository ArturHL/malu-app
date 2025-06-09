export default function useCategoryCard({id, title, url, click}) {
  function location() {
    if (!click) return
    sessionStorage.setItem('category', JSON.stringify({id, title, url}));
    window.location.href = `/web/category`
  }
  const style = {
    content: '""',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("${url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.3s ease-in-out',
  }

  return { location, style }
}