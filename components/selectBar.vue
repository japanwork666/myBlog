<template>
    <div class="select">
        <div class="select-container">
            <div class="select-title-bar">
                <div>News Release</div>
                <button>View All</button>
            </div>
            <div class="main-select-bar">
                <div class="select-item">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
                    <div>20240606</div>
                    <div>NaviPlus Adds AI Function to “NaviPlus Review,” its E-Commerce Review Management Service, That
                        Helps
                        Write
                        Product Reviews</div>
                    <div>bar</div>
                </div>
            </div>
        </div>
        <div class="select-container">
            <div class="select-title-bar">
                <div>IR NEWS</div>
                <button>View All</button>
            </div>
            <div class="main-select-bar">
                <div class="select-item">
                    <div>20240606</div>
                    <div>Notice of Convocation Annual General Meeting 2024</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
                    <div>20240606</div>
                    <div>Notification of Independent Directors</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
                    <div>20240606</div>
                    <div>Notice of Dividends of Surplus</div>
                    <div>bar</div>
                </div>
                <div class="select-item">
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
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .select-container {


        .select-title-bar {
            display: flex;
            justify-content: space-between;
            padding: 10px 0px;

            button {
                background-color: #fff;
                border-radius: 15px;
                padding: 10px 20px;
                border: none;
            }
        }

        .main-select-bar {
            display: flex;
            gap: 10px;

            .select-item {
                width: 25%;
                background-color: #fff;
                padding: 20px;
                border-radius: 15px;
            }
        }
    }
}

.select-container:nth-child(1) {
    margin-bottom: 20px;
}
</style>