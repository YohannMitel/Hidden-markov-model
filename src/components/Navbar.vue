<template>
    <div class="d-flex flex-column ">
        <div class="d-flex justify-content-between align-items-center">
            <p>
                <b>From : {{ router.routeFrom == 'empty' ? router.routeTo : router.routeFrom    }}</b>
            </p>
            <p>
                <b>Current : {{ router.routeTo }}</b>
            </p>
        </div>


        <ul class="nav nav-tabs pe-0 unselectable mt-4">
            <li class="nav-item">
                <RouterLink id="home_btn" class="nav-link" aria-current="page" to="/0" 
                @click.native="reloadPage('/0')">
                    <i style="color: #004087;" class="fa-solid fa-house" aria-hidden="true"></i>
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :class="routeClass('viewOne')" to="/1" role="button" 
                aria-expanded="false" @click.native="reloadPage('/1')">
                    Page 1
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :class="routeClass('viewTwo')" to="/2" role="button" 
                aria-expanded="false" @click.native="reloadPage('/2')">
                    Page 2
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :class="routeClass('viewThree')" to="/3" role="button"
                    aria-expanded="false" @click.native="reloadPage('/3')">
                    Page 3
                </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :class="routeClass('viewFour')" to="/3" role="button"
                    aria-expanded="false" @click.native="reloadPage('/4')">
                    Page 4
                </RouterLink>
            </li>
        </ul>

    </div>


</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const routeClass = (name) => {
    return route.name === name ? 'active' : '';
}

const reloadPage = (path) => {
    if (route.path === path) {

        router.push('empty');
    } else  {
        router.push(path.replace('/', ''));
    }
}
</script>