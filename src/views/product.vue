<template >
    <v-container class="pa-0 mb-5">
        <v-row no-gutters>
            <v-col cols="12">
                <v-row no-gutters>
                    <div>All Product</div>
                </v-row>
                <v-row no-gutters>
                    <ul class="tw-list-disc">
                        <router-link to="/PortBeam">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Port Beam</li>
                        </router-link>
                        <router-link to="/PortFei">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Port Fei</li>
                        </router-link>
                        <router-link to="/PortJN">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Port Junior</li>
                        </router-link>
                        <router-link to="/CloneBeam">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Clone Web Beam</li>
                        </router-link>
                        <router-link to="/CloneFei">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Clone Web Fei</li>
                        </router-link>
                        <router-link to="/CloneJN">
                            <li class="tw-no-underline tw-decoration-1 hover:tw-underline ">Clone Web Junior</li>
                        </router-link>
                    </ul>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>