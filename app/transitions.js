export default function() {
  this.transition(
    this.toRoute('article'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('blog'),
    this.use('toRight')
  );
}
