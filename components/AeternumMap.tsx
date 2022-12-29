const AeternumMap = ({ name }: { name: string }) => {
  return (
    <>
      <iframe
        src={`https://aeternum-map.gg/influences/${encodeURIComponent(
          name
        )}?embed=true`}
        height="600"
        width="100%"
      />
      <small>
        Pro tip: Install the{" "}
        <a
          href="https://www.overwolf.com/app/Leon_Machens-Aeternum_Map"
          target="_blank"
        >
          Aeternum Map app
        </a>{" "}
        to submit influence updates
      </small>
    </>
  );
};

export default AeternumMap;
