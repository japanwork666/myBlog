<template>
    <div class="DefaultLayout bg-[#F1F1F1] w-full">
        <header class="sticky top-0">
            <div class="Banner-container px-[30px] py-[20px] pb-[10px]">
                <div
                    class="Banner shadow-custom rounded-[8px] pt-[10px] pb-[10px] pl-[40px] pr-[40px] text-[16px] bg-[#fff] opacity-70 flex items-center">
                    <div>Digital Garage</div>
                    <nav class="m-auto">
                        <ul class="Banner-mid list-none mobile:hidden tablet:hidden laptop:block">
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">Company</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">Business</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">Sustainability</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">News</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">Portal</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">IR</a>
                            </li>
                            <li class="inline mr-[2vw]">
                                <a class="no-underline text-black" href="#">Career</a>
                            </li>
                        </ul>
                    </nav>
                    <div
                        class="language border border-black rounded-[50%] flex justify-center items-center p-[7px] w-[30px] h-[30px]">
                        JP
                    </div>
                    <div
                        class="hamburger border border-[#663399] rounded-[25px] p-[7px] w-[30px] h-[30px] relative mobile:block tablet:block laptop:hidden">
                        <span
                            class="h-[2px] w-[33%] bg-[#6e6666] rounded-[25px] absolute top-[37%] left-[50%] transform -translate-x-1/2"></span>
                        <span
                            class="h-[2px] w-[33%] bg-[#6e6666] rounded-[25px] absolute top-[50%] left-[50%] transform -translate-x-1/2"></span>
                        <span
                            class="h-[2px] w-[33%] bg-[#6e6666] rounded-[25px] absolute top-[63%] left-[50%] transform -translate-x-1/2"></span>
                    </div>
                </div>
            </div>
            <div
                class="mobile-select shadow-custom h-[80vh] hidden rounded-[8px] pt-[10px] pb-[10px] pl-[40px] pr-[40px] text-[16px] bg-[#fff] opacity-70 ml-[30px] mr-[30px]">
                <nav>
                    <ul class="list-none">
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center">
                            <a class="no-underline text-black" href="#">Company</a>
                        </li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                href="#">Business</a></li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                class="no-underline text-black" href="#">Sustainability</a></li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                class="no-underline text-black" href="#">News</a></li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                class="no-underline text-black" href="#">Portal</a></li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                class="no-underline text-black" href="#">IR</a></li>
                        <li class="border-b border-custom-border border-b-1 h-[5vh] flex items-center"><a
                                class="no-underline text-black" href="#">Career</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
.DefaultLayout {

    header {

        .Banner-container {

            .Banner {

                nav {

                    .Banner-mid li {

                        a {}
                    }


                }

                .language {}

                .hamburger {}

                .hamburger span {


                    transition: .3s ease;
                }

                .hamburger span:nth-child(1) {}

                .hamburger span:nth-child(3) {}

                .hamburger.active span:nth-child(1) {
                    top: 53%;
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active span:nth-child(3) {
                    top: 47%;
                    transform: translate(-50%, 50%) rotate(-45deg);
                }


            }
        }

        .mobile-select {

            nav {
                >ul {
                    >li {

                        >a {}
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    header {

        .mobile-select {}
    }

    .Banner-mid {}

    .hamburger {}
}

@media screen and (max-width: 768px) {
    header {

        .mobile-select {}
    }

    .Banner-mid {
        display: none;
    }

}

@media screen and (max-width: 1200px) {}
</style>
<script>
export default {

    mounted() {
        const hamburger = document.querySelector('.hamburger');
        const mobileSelect = document.querySelector('.mobile-select');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileSelect.style.display = mobileSelect.style.display === "block" ? "none" : "block";
        });




    }
}
</script>
