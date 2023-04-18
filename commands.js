Office.onReady( function (reason) { 
});

function ButtonPressedFunction(event) {
  try {
        Excel.run(async (ctx) => {
            const _range = ctx.workbook.getSelectedRange();
            _range.format.fill.color = "yellow";

            ctx.sync();
        });
    } catch (error) {
        console.error(error);
    }

  event.completed();
}

Office.actions.associate("ButtonPressedEvent", ButtonPressedFunction);
