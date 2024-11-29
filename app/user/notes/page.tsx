import TitleHolder from "@/components/TitleHolder";

const NotesPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleHolder
        words={[
          { word: "My", type: "normal" },
          { word: "Notes", type: "bold" },
        ]}
      />
      Notes go here...
    </div>
  );
};

export default NotesPage;
