const AeternumMap = ({ name }: { name: string }) => {
  return (
    <iframe
      src={`https://aeternum-map.gg/influences/${encodeURIComponent(
        name
      )}?embed=true`}
      height="600"
      width="100%"
    />
  );
};

export default AeternumMap;
