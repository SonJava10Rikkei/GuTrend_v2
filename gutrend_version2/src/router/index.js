import Home from '~/pages/Home'
import Following from '~/pages/Following'
// Profile
import Profile from '~/pages/Profile'


// Puclic Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile }


]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }