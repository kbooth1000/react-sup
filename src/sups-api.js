
let SupsAPI =
  {
    sups: [
      {
        key: '1', author: 'Louise',
        body: 'That is just the way with some people.',
        time: new Date()
      }, {
        key: '2', author: 'Louise',
        body: 'I could not bear to think about it; and yet, somehow, I could not think about nothing else.',
        time: new Date()
      }, {
        key: '3', author: 'Bob',
        body: 'If you tell the truth you do not need a good memory.',
        time: new Date()
      }, {
        key: '4', author: 'Gene',
        body: 'We got all the fools in town on our side!',
        time: new Date()
      }
    ],
  getAllSups: () => { return this.sups },
  getOneSup: (keynum) => {
    let oneSup = sup => sup.key === keynum;
    return this.sups.find(oneSup);
  }
}

export default SupsAPI
