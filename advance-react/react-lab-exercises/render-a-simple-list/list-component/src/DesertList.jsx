export const DesertList = (props) => {
  const deserts = props.data.filter((desert) => desert.calories <= 500)
    .toSorted((a, b) => a.calories - b.calories)
    .map((desert) => <li key={desert.name}> {`${desert.name} - ${desert.calories} cal`}</li>)
  return (
    <ul>
      {deserts}
    </ul>
  );

}
