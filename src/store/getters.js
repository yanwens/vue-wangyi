export default {
  homeDirectSupplyList (state) {
    return state.directSupplyList.filter((item,index)=> {
      // item.bgImg = {backgroundImage: `url(${item.picUrl})`}
      return index<4
    })
  },
  leftTypeData (state) {
    return state.typeList[0]
  }
}
