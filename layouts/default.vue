<template>
    <div class="DefaultLayout">
        <header class="Banner">
            <div>Digital Garage</div>
            <nav>
                <ul class="Banner-mid">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Portal</a></li>
                    <li><a href="#">IR</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </nav>
            <div>JP</div>
        </header>
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
}

.DefaultLayout {
    background-color: #F1F1F1;
}

.Banner {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    gap: 100px;
    padding: 30px;
    font-size: 26px;
    margin: 20px 50px;
    background-color: #fff;
    position: sticky;
    top: 15px;
    opacity: 0.7;
}

.Banner-mid li {
    display: inline;
    margin-right: 4vw;
}

.Banner-mid li a {
    text-decoration: none;
}
</style>
