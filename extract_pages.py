import fitz
import os

doc = fitz.open(r'C:\Users\zinda\OneDrive\Desktop\Portfolio\Research Capstone Final Deck.pdf')
print(f'Total pages: {doc.page_count}')

out = r'C:\Users\zinda\OneDrive\Desktop\Portfolio\01 Claude Code Version\temp-pdf-pages'
os.makedirs(out, exist_ok=True)

for i in range(doc.page_count):
    page = doc[i]
    pix = page.get_pixmap(dpi=200)
    pix.save(os.path.join(out, f'page_{i+1:02d}.png'))
    print(f'Saved page {i+1}')

doc.close()
print('Done')
