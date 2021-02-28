$('#addSubmitBtn').on('submit', function(e){
  e.preventDefault().then(() => {
    window.location.replace('/adddog');
  })
  console.log(1)

})