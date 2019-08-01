describe('e2e test', () => {
  describe('test scrollIntoView', () => {
    it('section2 should at the top of page', async () => {
      await page.goto('http://localhost:9000/#demo?_to=section2');
      const section2 = await page.$('#section2');
      const boundingBox = await section2.boundingBox();

      await expect(boundingBox.y).toBe(0);
    });

    it('section3 should scroll to the top of page', async (done) => {
      const a3 = await page.$('#a3');
      const section3 = await page.$('#section3');

      await a3.click()

      setTimeout(async () => {
        const boundingBox = await section3.boundingBox();

        await expect(boundingBox.y).toBe(0);
        done();
      }, 1000)
    });
  });

  describe('test scrollTop', () => {
    it('section2 should at the top of page', async (done) => {
      await page.goto('http://localhost:9000');
      const scrollTop = await page.$('#scrollTop');
      await scrollTop.click();
      const a2 = await page.$('#a2');
      await a2.click();

      setTimeout(async () => {
        const section2 = await page.$('#section2');
        const boundingBox = await section2.boundingBox();

        await expect(boundingBox.y).toBe(0);
        done();
      }, 1000);
    });

    it('section3 should scroll to 100px from the top of page', async (done) => {
      const interval = await page.$('#interval')
      await interval.type('100');
      const a3 = await page.$('#a3');
      await a3.click();

      setTimeout(async () => {
        const section3 = await page.$('#section3')
        const boundingBox = await section3.boundingBox();

        await expect(boundingBox.y).toBe(-100);
        done();
      }, 1000)
    });
  });
});
