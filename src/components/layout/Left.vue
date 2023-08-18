<template>
    <div class="container">
        <img class="pineapple" src="@/assets/pineapple.jpg">
        <div class="leftfont">图床picture</div>
        <svg t="1692347519757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2520" width="24" height="24">
            <path
                d="M101.613 469.454L341.042 660.22l596.181-549.226s39.995-36.515 74.941-7.985c10.374 8.531 22.386 32.829-4.642 70.915L385.063 903.06s-47.709 65.316-104.358-0.683L12.067 539.685s-31.874-49.141 7.985-78.557c13.513-9.828 44.091-25.254 81.561 8.326z"
                fill="#f4ea2a" p-id="2521"></path>
        </svg>
    </div>
</template>I=
<script>
export default {
    name: 'LeftComp',
    setup() { }
}
</script>
<style scoped>
.container {
    background-color: #409eff;
    height: calc(100%);
    width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.pineapple{
    height: 200px;
}
.leftfont {
    font-size: 2rem;
    color: white;
}</style>