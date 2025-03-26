
import ViewZero from "./views/ViewZero.vue"
import ViewOne from "./views/ViewOne.vue"
import ViewTwo from "./views/ViewTwo.vue"
import ViewThree from "./views/ViewThree.vue"
import ViewFour from "./views/ViewFour.vue"
import Empty from "./views/Empty.vue"




export const routes = [
    {path:'/empty', component: Empty, name: 'empty'},
    {path: '/0', component: ViewZero, name: 'viewZero', matrixIndex: 0},
    {path: '/1', component: ViewOne, name: 'viewOne', matrixIndex: 1},
    {path: '/2', component: ViewTwo, name: 'viewTwo', matrixIndex: 2},
    {path: '/3', component: ViewThree, name: 'viewThree',matrixIndex: 3},
    {path: '/4', component: ViewFour, name: 'viewFour', matrixIndex: 4},


]

