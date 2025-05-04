import { Container } from "@/components/layouts/container";

/**
 * Test page to validate that layout components render properly
 * on different viewports (mobile, tablet, desktop)
 */
export default function LayoutTestPage() {
  return (
    <div className="space-y-12 py-8">
      <Container>
        <div className="space-y-8">
          <section>
            <h1 className="text-3xl font-heading font-bold mb-4">Layout Test Page</h1>
            <p className="text-lg text-muted-foreground mb-6">
              This page is used to validate that all layout components render properly on different viewports.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <p className="text-green-800">
                ✅ The page header and footer should be visible and properly styled.
                Try resizing your browser window to test responsive behavior.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">Responsive Layout Tests</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="font-medium mb-2">Header Responsiveness</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>On <strong>mobile</strong>: Menu should collapse into a hamburger icon</li>
                  <li>On <strong>tablet and above</strong>: Full horizontal navigation should be visible</li>
                  <li>Logo and cart icon should be visible on all viewport sizes</li>
                </ul>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h3 className="font-medium mb-2">Footer Responsiveness</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>On <strong>mobile</strong>: Footer columns should stack vertically</li>
                  <li>On <strong>tablet and above</strong>: Footer should display in a multi-column layout</li>
                  <li>All links and content should be properly spaced and aligned</li>
                </ul>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <h3 className="font-medium mb-2">Container Component</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Content should have consistent horizontal padding across all viewports</li>
                  <li>Maximum width should be respected on larger screens</li>
                  <li>Content should be centered within the viewport</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">Typography Test</h2>
            
            <div className="space-y-6 bg-white p-6 rounded-lg border">
              <div>
                <h1 className="text-4xl font-heading font-bold mb-2">Heading 1 (Poppins)</h1>
                <p className="font-sans">Body text (Inter) - The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-heading font-semibold mb-2">Heading 2 (Poppins)</h2>
                <p className="font-sans">Body text (Inter) - The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-medium mb-2">Heading 3 (Poppins)</h3>
                <p className="font-sans">Body text (Inter) - The quick brown fox jumps over the lazy dog.</p>
              </div>
              
              <div>
                <p className="font-japanese text-lg">Japanese Text (Noto Sans JP): 寿司 - すし - 鮨</p>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">Color Palette Test</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary text-white rounded-lg">
                <div className="font-medium">Primary</div>
                <div className="text-sm opacity-80">#E94560</div>
              </div>
              
              <div className="p-4 bg-secondary text-white rounded-lg">
                <div className="font-medium">Secondary</div>
                <div className="text-sm opacity-80">#0F3460</div>
              </div>
              
              <div className="p-4 bg-accent text-white rounded-lg">
                <div className="font-medium">Accent</div>
                <div className="text-sm opacity-80">#16213E</div>
              </div>
              
              <div className="p-4 bg-white text-text border rounded-lg">
                <div className="font-medium">Background</div>
                <div className="text-sm opacity-80">#FFFFFF</div>
              </div>
              
              <div className="p-4 bg-text text-white rounded-lg">
                <div className="font-medium">Text</div>
                <div className="text-sm opacity-80">#1A1A2E</div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
