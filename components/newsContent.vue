<template>
    <div class="news w-[100%]">
        <div class="news-container flex px-[20px] py-[0px] h-[70vh] mobile:flex-col h-[100vh] tablet:flex-col h-[100vh]">
            <div class="left-news bg-[#ffc0cb] rounded-[15px] w-[70%] flex flex-col justify-end p-[30px] mr-[10px] mobile:w-[100%] h-[100%] tablet:w-[100%] h-[100%]">
                <h2>Designing <br>New Context</h2>
                <div class="flex justify-between">
                    <p>Design New Context for a sustainable society with technology</p>
                    <button class="px-[20px] py-[10px] rounded-[15px] border-0 bg-[#fff]">About Us</button>
                </div>
            </div>
            <div class="right-news w-[30%] flex flex-col gap-[10px] mobile:w-[100%] h-[100%] mt-[3vw] tablet:w-[100%] h-[100%] mt-[3vw]">
                <div class="news-item w-[100%] h-[100%] bg-[#c0c0ff] rounded-[15px] flex items-end justify-between p-[30px]">
                    <div class="text-[#fff]">
                        <div>IR News</div>
                        <div>Financial Results for the Fiscal Year Ended March 31, 2024</div>
                    </div>
                    <button class="px-[20px] py-[10px] rounded-[15px] border-0 bg-[#fff]">IR</button>
                </div>
                <div class="news-item w-[100%] h-[100%] bg-[#c0c0ff] rounded-[15px] flex items-end justify-between p-[30px]">
                    <div class="text-[#fff]">
                        <div>IR News</div>
                        <div>CEO Comment Vol.81
                            “FYE March 2023 Financial Report Summary”
                        </div>
                    </div>
                    <button class="px-[20px] py-[10px] rounded-[15px] border-0 bg-[#fff]">IR</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.news {

}

.news-container {

}

.left-news {

    div {


        button {

        }
    }
}

.right-news {


    

    .news-item {




        >div {
        }

        >button {

        }
    }
}

@media screen and (max-width: 375px) {
    .news-container {

    }

    .left-news {
    }

    .right-news {

    }
}

@media screen and (max-width: 768px) {
    .news-container {

    }

    .left-news {

    }

    .right-news {

    }
}

@media screen and (max-width: 1200px) {}
</style>