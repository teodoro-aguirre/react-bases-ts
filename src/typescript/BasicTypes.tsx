

export const BasicTypes = () => {

  const name: string = 'Teodoro';
  const age: number = 22;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'Vue', 'Node'];

  return (
    <>
      <h3>Tipos Básicos</h3>
      { name } { age } { isActive ? 'true' : 'false' }
      <br />
      {powers.join(' ')}
    </>
  )
}
