<template>
    <div class="select px-[100px] py-[50px] flex flex-col justify-center mobile:p-[20px] tablet:p-[20px]">
        <div class="select-container">
            <div class="select-title-bar flex justify-between px-[0px] py-[10px]">
                <div>News Release</div>
                <button class="px-[20px] py-[10px] rounded-[15px] border-0 bg-[#fff]">View All</button>
            </div>
            <div class="main-select-bar flex gap-[10px] mobile:flex-col tablet:flex-col">
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <tag>Corperate</tag>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <tag>Corperate</tag>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <tag>Corperate</tag>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <tag>Corperate</tag>
                </div>
            </div>
        </div>
        <div class="select-container">
            <div class="select-title-bar flex justify-between px-[0px] py-[10px]">
                <div>IR NEWS</div>
                <button class="px-[20px] py-[10px] rounded-[15px] border-0 bg-[#fff]">View All</button>
            </div>
            <div class="main-select-bar flex gap-[10px]">
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>Notice of Convocation Annual General Meeting 2024</div>
                    <div>bar</div>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>Notification of Independent Directors</div>
                    <div>bar</div>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>Notice of Dividends of Surplus</div>
                    <div>bar</div>
                </div>
                <div class="select-item w-[25%] p-[20px] rounded-[15px] bg-[#fff] mobile:w-[100%] tablet:w-[100%]">
                    <div>20240606</div>
                    <div>Notice of Changes in Organization and Personnel</div>
                    <div>bar</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.select {


    .select-container {


        .select-title-bar {


            button {

            }
        }

        .main-select-bar {


            .select-item {

            }
        }
    }
}

.select-container:nth-child(1) {
    margin-bottom: 20px;
}

@media screen and (max-width: 375px) {
    .select {

        .select-container {
            .main-select-bar {

                .select-item {

                }
            }
        }

    }

}

@media screen and (max-width: 768px) {
    .select {


        .select-container {
            .main-select-bar {

                .select-item {
                }
            }
        }

    }
}

@media screen and (max-width: 1200px) {}
</style>