<template>
    <div class="full-container text-white bg-[#ac79a3] h-[100vh] p-[100px] flex flex-col justify-center mobile:p-[20px] tablet:p-[20px]">
        <div class="paragraph-container flex items-end mobile:flex-col items-center tablet:flex-col items-center">
            <h2 class="w-[80%] border border-1 border-[#ffff00] text-[100px] mobile:w-[100%] text-[50px] tablet:w-[100%] text-[50px]">DG <br>FinTech Shift</h2>
            <div class="w-[50%] flex flex-col gap-[20px] mobile:w-[100%] tablet:w-[100%]">
                <h3 class="text-[36px] mobile:text-[20px] tablet:text-[20px]">The integration of payments, data and technology.</h3>
                <p>This is a group strategy that combines the Digital Garage Group's three largest assets in Japan:
                    “Payment
                    Platform," “Media Business," and “Global Startup Investment Business” based on the purpose of
                    "Designing
                    ‘New
                    Context’ for a sustainable society with technology.</p>
            </div>
        </div>
        <div class="video-container h-[70%] flex justify-center border border-1 border-[#ffc0cb] p-[40px] mobile:pt-[0px] pr-[0px] pb-[20px] pl-[0px] h-[100%] flex items-center tablet:pt-[0px] pr-[0px] pb-[20px] pl-[0px] h-[100%] flex items-center">
            <div
                class="main-video w-[80%] h-[100%] rounded-[12px] bg-[#fff] text-black flex items-center justify-center text-[70px] mobile:h-[40%] tablet:h-[40%]">
                video</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.full-container {


    .paragraph-container {

        h2 {}

        div {


            h3 {}
        }
    }

    .video-container {

        .main-video {}
    }

}

@media screen and (max-width: 375px) {
    .full-container {

        .paragraph-container {



            h2 {

            }

            div {


                h3 {

                }

                p {}
            }
        }

        .video-container {



            .main-video {

            }
        }
    }
}


@media screen and (max-width: 768px) {
    .full-container {


        .paragraph-container {

            h2 {

            }

            div {


                h3 {
                }

                p {}
            }
        }

        .video-container {

            .main-video {
            }
        }
    }
}

@media screen and (max-width: 1200px) {}
</style>