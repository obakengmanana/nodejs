<template>
  <div>
    <div class="container">
      <h1 class="text-4xl heading">Dotsure Development Assessment</h1>
      <br />
      <NuxtLink class="top-buttons" to="/list">Show all users</NuxtLink
      >&nbsp;|&nbsp;
      <NuxtLink class="top-buttons" to="/">Add new user</NuxtLink>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.top-buttons {
  padding: 5px;
  border-radius: 14px;
  border: 2px #007bff solid;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.heading {
  font-size: 1.5rem !important;
  line-height: 2.5rem !important;
  font-family: fantasy;
  text-align: center;
}

.next-btn {
  margin-top: 30px;
  border: 2px green solid;
  padding: 5px;
  border-radius: 12px;
}

.prev-btn {
  margin-top: 30px;
  margin-right: 20px;
  border: 2px solid red;
  padding: 7px;
  border-radius: 12px;
}

.dlt-btn{
  color: #007bff;
  cursor: pointer;
  font-weight: 700;
}
</style>
