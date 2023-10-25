// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()



router.get('/', function (req, res) {
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/selector', function (req, res) {
  // res.render генерує нам HTML сторінку

  res.render('selector', {
    layout: "selector",
  })
  
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
