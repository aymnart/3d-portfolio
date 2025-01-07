function Hr() {
  return (
    <div className="relative flex items-center justify-center h-10 w-full">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[calc(2.6rem+0.6vw)] h-7 bg-foreground/90 border-[10px] border-background rounded-full z-10" />
    </div>
  );
}

export default Hr;