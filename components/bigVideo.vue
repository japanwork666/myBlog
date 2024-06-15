<template>
    <div class="full-container">
        <div class="paragraph-container">
            <h2>DG <br>FinTect Shift</h2>
            <div>
                <h3>The integration of payments, data and technology.</h3>
                <p>This is a group strategy that combines the Digital Garage Group's three largest assets in Japan: “Payment
                    Platform," “Media Business," and “Global Startup Investment Business” based on the purpose of "Designing
                    ‘New
                    Context’ for a sustainable society with technology.</p>
            </div>
        </div>
        <div class="video-container">
            <div class="main-video">video</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.full-container {
    color: white;
    background-color: rgb(172, 121, 163);
    height: 100vh;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .paragraph-container {
        display: flex;
        align-items: end;

        h2 {
            width: 80%;
            border: 1px solid yellow;
            font-size: 100px;
        }

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            h3 {
                font-size: 36px;
            }
        }
    }

    .video-container {
        height: 70%;
        display: flex;
        justify-content: center;
        border: 1px solid pink;
        padding: 40px;

        .main-video {
            width: 80%;
            height: 100%;
            border-radius: 12px;
            background-color: white;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 70px;
        }
    }

}
</style>