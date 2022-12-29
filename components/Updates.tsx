import dynamic from "next/dynamic";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

const Updates = ({
  channel,
  hideTip,
}: {
  channel: string;
  hideTip?: boolean;
}) => {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <WidgetBot
          server="1015696487113555998"
          channel={channel}
          height="100%"
          width="100%"
        />
      </div>
      {!hideTip && (
        <small>
          Pro tip:{" "}
          <a
            href="https://support.discord.com/hc/en-us/articles/360028384531-Channel-Following-FAQ"
            target="_blank"
          >
            Follow updates
          </a>{" "}
          of this server on your own Discord
        </small>
      )}
    </>
  );
};

export default Updates;
