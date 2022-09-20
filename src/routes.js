import {HomePage} from './pages/home-page.jsx'
import {TeacherApp} from './pages/teacher-app.jsx'
import {StudioApp} from './pages/studio-app.jsx'
import {VocalCoachApp} from './pages/vocal-coach-app.jsx' 
import {MusicLittleOnesApp} from './pages/music-little-ones-app.jsx'
import {LadinoPerformanceApp} from './pages/ladino-performance-app.jsx'
import {DisneySongs} from './pages/disney-songs'
import {ContactUs} from './pages/contact-us.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path:'/',
        component: HomePage,
        label: 'ראשי',
    },
    {
        path:'/teacher',
        component: TeacherApp,
        label: 'המורה'
    },
    {
        path:'/studio',
        component: StudioApp,
        label: 'הסטודיו'
    },
    {
        path:'/vocal-couch',
        component: VocalCoachApp,
        label: 'פיתוח קול'
    },
    {
        path:'/music-little-ones',
        component: MusicLittleOnesApp,
        label: 'מוזיקה לקטנטנים'
    },
    {
        path:'/ladino-performance',
        component: LadinoPerformanceApp,
        label: 'הופעת לאדינו'
    },
    {
        path:'/disney-songs',
        component: DisneySongs,
        label: 'שירי דיסני'
    },
    {
        path:'/contact-us',
        component: ContactUs,
        label: 'צור קשר'
    }
]

export default routes;