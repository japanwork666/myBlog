<template>
    <div class="full-container text-white bg-[#ac79a3] h-[100vh] p-[100px] flex flex-col justify-center">
        <div class="paragraph-container flex items-end">
            <h2 class="w-[80%] border border-1 border-[#ffff00] text-[100px]">DG <br>FinTech Shift</h2>
            <div class="w-[50%] flex flex-col gap-[20px]">
                <h3 class="text-[36px]">The integration of payments, data and technology.</h3>
                <p>This is a group strategy that combines the Digital Garage Group's three largest assets in Japan:
                    “Payment
                    Platform," “Media Business," and “Global Startup Investment Business” based on the purpose of
                    "Designing
                    ‘New
                    Context’ for a sustainable society with technology.</p>
            </div>
        </div>
        <div class="video-container h-[70%] flex justify-center border border-1 border-[#ffc0cb] p-[40px]">
            <div
                class="main-video w-[80%] h-[100%] rounded-[12px] bg-[#fff] text-black flex items-center justify-center text-[70px]">
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
        padding: 20px;

        .paragraph-container {
            flex-direction: column;
            align-items: center;

            h2 {
                width: 100%;
                font-size: 50px;
            }

            div {
                width: 100%;

                h3 {
                    font-size: 20px;
                }

                p {}
            }
        }

        .video-container {
            padding: 0px 0px 20px 0px;
            height: 100%;
            display: flex;
            align-items: center;

            .main-video {
                height: 40%;
            }
        }
    }
}


@media screen and (max-width: 768px) {
    .full-container {
        padding: 20px;

        .paragraph-container {
            flex-direction: column;
            align-items: center;

            h2 {
                width: 100%;
                font-size: 50px;
            }

            div {
                width: 100%;

                h3 {
                    font-size: 20px;
                }

                p {}
            }
        }

        .video-container {
            padding: 0px 0px 20px 0px;
            height: 100%;
            display: flex;
            align-items: center;

            .main-video {
                height: 40%;
            }
        }
    }
}

@media screen and (max-width: 1200px) {}
</style>