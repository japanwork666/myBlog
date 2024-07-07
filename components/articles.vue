<template>
    <div class="articles-container">
        <div>
            <h1>Articles</h1>
            <div>Portal</div>
        </div>
        <div class="card-item-container">
            <div class="card-item">
                <div>
                    <p>＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need Advertising Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p>2024.06.03</p>
                </div>
            </div>
            <div class="card-item">
                <div>
                    <p>＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need Advertising Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p>2024.06.03</p>
                </div>
            </div>
            <div class="card-item">
                <div>
                    <p>＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need Advertising Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p>2024.06.03</p>
                </div>
            </div>
            <div class="card-item">
                <div>
                    <p>＜Interview with TOYO KEIZAI and BI.Garage＞<br>Companies Need Advertising Strategies to
                        <br>Protect
                        Brand
                        Value
                    </p>
                    <p>2024.06.03</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.articles-container {
    background-color: black;
    height: 50%;
    padding: 50px;
    border: 1px solid white;

    div {
        h1 {
            color: white;
        }
    }

    .card-item-container {
        display: flex;
        height: 100%;

        .card-item {
            width: 20%;
            height: 70%;
            border-radius: 10px;
            border: 2px solid purple;
            padding: 20px;
            display: flex;
            align-items: end;

            p {
                color: white;
                line-height: 30px;
            }
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