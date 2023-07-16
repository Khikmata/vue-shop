export default {
  bind: function (el: any, binding: any) {
    el.innerHTML = binding.value
  },
  name: 'unsave-html'
}
