import fitz
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\zinda\OneDrive\Desktop\Portfolio\FINAL Loop Week 30 presentation.pdf'
output_dir = r'C:\Users\zinda\OneDrive\Desktop\Portfolio\01 Claude Code Version\loop-pdf-pages'

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f'Total pages: {doc.page_count}')

for i in range(doc.page_count):
    page = doc[i]
    text = page.get_text()[:120].replace('\n', ' ').strip()
    print(f'Page {i+1}: {text}')

    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    pix.save(os.path.join(output_dir, f'page-{i+1:02d}.png'))

print(f'\nSaved {doc.page_count} pages to {output_dir}')
