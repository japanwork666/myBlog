<template>
    <div class="articles-container bg-black h-[50%] p-[50px] border border-white">
        <div>
            <h1 class="text-white">Articles</h1>
            <div>Portal</div>
        </div>
        <div class="card-item-container flex h-[100%]">
            <div class="card-item w-[20%] h-[70%] rounded-[10px] border-2 border-custom-purple p-[20px] flex items-end">
                <div>
                    <p class="text-white leading-[30px]">＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need
                        Advertising
                        Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p class="text-white leading-[30px]">2024.06.03</p>
                </div>
            </div>
            <div class="card-item w-[20%] h-[70%] rounded-[10px] border-2 border-custom-purple p-[20px] flex items-end">
                <div>
                    <p class="text-white leading-[30px]">＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need
                        Advertising
                        Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p class="text-white leading-[30px]">2024.06.03</p>
                </div>
            </div>
            <div class="card-item w-[20%] h-[70%] rounded-[10px] border-2 border-custom-purple p-[20px] flex items-end">
                <div>
                    <p class="text-white leading-[30px]">＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need
                        Advertising
                        Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p class="text-white leading-[30px]">2024.06.03</p>
                </div>
            </div>
            <div class="card-item w-[20%] h-[70%] rounded-[10px] border-2 border-custom-purple p-[20px] flex items-end">
                <div>
                    <p class="text-white leading-[30px]">＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need
                        Advertising
                        Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p class="text-white leading-[30px]">2024.06.03</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.articles-container {


    div {
        h1 {}
    }

    .card-item-container {


        .card-item {


            p {}
        }
    }
}

@media screen and (max-width: 375px) {
    .articles-container {
        padding: 20px;

        .card-item-container {
            flex-direction: column;
            width: 100%;
            display: flex;
            align-items: center;

            .card-item {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 1200px) {}
</style>