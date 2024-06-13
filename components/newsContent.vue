<template>
    <div class="news">
        <div class="news-container">
            <div class="left-news">
                <h2>Designing <br>New Context</h2>
                <div>
                    <p>Design New Context for a sustainable society with technology</p>
                    <button>About Us</button>
                </div>
            </div>
            <div class="right-news">
                <div class="news-item">
                    <div>
                        <div>IR News</div>
                        <div>Financial Results for the Fiscal Year Ended March 31, 2024</div>
                    </div>
                    <button>IR</button>
                </div>
                <div class="news-item">
                    <div>
                        <div>IR News</div>
                        <div>CEO Comment Vol.81
                            “FYE March 2023 Financial Report Summary”
                        </div>
                    </div>
                    <button>IR</button>
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

.news-container {
    display: flex;
    padding: 0px 200px;
    height: 70vh;
}

.left-news {
    background-color: pink;
    border-radius: 15px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 30px;
    margin-right: 10px;

    div {
        display: flex;
        justify-content: space-between;

        button {
            padding: 10px 20px;
            border-radius: 15px;
            border: none;
            background-color: #fff;
        }
    }
}

.right-news {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .news-item {
        width: 100%;
        height: 100%;
        background-color: rgb(192, 192, 255);
        border-radius: 15px;
        display: flex;
        align-items: end;
        justify-content: space-between;
        padding: 30px;

        >div {
            color: #fff;
        }

        >button {
            padding: 10px 20px;
            border-radius: 15px;
            border: none;
            background-color: #fff;
        }
    }
}
</style>