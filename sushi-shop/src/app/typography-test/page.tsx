import { Container } from "@/components/layouts/container";
import { 
  H1, 
  H2, 
  H3, 
  H4, 
  P, 
  Lead, 
  Large, 
  Small, 
  Muted, 
  Japanese, 
  Blockquote, 
  OrderedList, 
  UnorderedList, 
  ListItem, 
  InlineCode,
  SectionHeader 
} from "@/components/ui/typography";

/**
 * Typography Test Page
 * This page demonstrates all typography components and styling defined in the system
 * Used to validate Step 7 of the implementation plan
 */
export default function TypographyTestPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Page Header */}
          <div className="space-y-4 text-center">
            <H1>Typography System</H1>
            <Lead>
              This page showcases the typography components and styling for the Sushi Shop application.
            </Lead>
          </div>

          {/* Font Family Samples */}
          <section className="space-y-6">
            <H2>Font Families</H2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border p-6">
                <Small className="text-muted-foreground">Headings - Poppins</Small>
                <div className="font-heading mt-2 text-2xl font-semibold">
                  Poppins Font - あ い う え お
                </div>
                <P className="mt-2 font-heading text-sm">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </P>
              </div>

              <div className="rounded-lg border p-6">
                <Small className="text-muted-foreground">Body - Inter</Small>
                <div className="font-sans mt-2 text-2xl font-semibold">
                  Inter Font - あ い う え お
                </div>
                <P className="mt-2 font-sans text-sm">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </P>
              </div>

              <div className="rounded-lg border p-6">
                <Small className="text-muted-foreground">Japanese - Noto Sans JP</Small>
                <div className="font-japanese mt-2 text-2xl font-semibold">
                  のと サンズ JP - 寿司
                </div>
                <P className="mt-2 font-japanese text-sm">
                  あいうえお かきくけこ<br />
                  さしすせそ たちつてと<br />
                  0123456789
                </P>
              </div>
            </div>
          </section>

          {/* Color Samples */}
          <section className="space-y-6">
            <H2>Color System</H2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {/* Primary colors */}
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <div className="h-16 w-full rounded-md bg-primary"></div>
                  <Small>Primary</Small>
                  <Muted>#E94560</Muted>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-50"></div>
                    <div className="text-center text-xs">50</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-100"></div>
                    <div className="text-center text-xs">100</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-200"></div>
                    <div className="text-center text-xs">200</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-300"></div>
                    <div className="text-center text-xs">300</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-400"></div>
                    <div className="text-center text-xs">400</div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-500"></div>
                    <div className="text-center text-xs">500</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-600"></div>
                    <div className="text-center text-xs">600</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-700"></div>
                    <div className="text-center text-xs">700</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-800"></div>
                    <div className="text-center text-xs">800</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-primary-900"></div>
                    <div className="text-center text-xs">900</div>
                  </div>
                </div>
              </div>

              {/* Secondary colors */}
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <div className="h-16 w-full rounded-md bg-secondary"></div>
                  <Small>Secondary</Small>
                  <Muted>#0F3460</Muted>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-50"></div>
                    <div className="text-center text-xs">50</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-100"></div>
                    <div className="text-center text-xs">100</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-200"></div>
                    <div className="text-center text-xs">200</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-300"></div>
                    <div className="text-center text-xs">300</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-400"></div>
                    <div className="text-center text-xs">400</div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-500"></div>
                    <div className="text-center text-xs">500</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-600"></div>
                    <div className="text-center text-xs">600</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-700"></div>
                    <div className="text-center text-xs">700</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-800"></div>
                    <div className="text-center text-xs">800</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-secondary-900"></div>
                    <div className="text-center text-xs">900</div>
                  </div>
                </div>
              </div>

              {/* Accent colors */}
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <div className="h-16 w-full rounded-md bg-accent"></div>
                  <Small>Accent</Small>
                  <Muted>#16213E</Muted>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-50"></div>
                    <div className="text-center text-xs">50</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-100"></div>
                    <div className="text-center text-xs">100</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-200"></div>
                    <div className="text-center text-xs">200</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-300"></div>
                    <div className="text-center text-xs">300</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-400"></div>
                    <div className="text-center text-xs">400</div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-500"></div>
                    <div className="text-center text-xs">500</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-600"></div>
                    <div className="text-center text-xs">600</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-700"></div>
                    <div className="text-center text-xs">700</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-800"></div>
                    <div className="text-center text-xs">800</div>
                  </div>
                  <div>
                    <div className="h-8 w-full rounded-md bg-accent-900"></div>
                    <div className="text-center text-xs">900</div>
                  </div>
                </div>
              </div>

              {/* Background & Text */}
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <div className="h-16 w-full rounded-md bg-background border"></div>
                  <Small>Background</Small>
                  <Muted>#FFFFFF</Muted>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full rounded-md bg-text"></div>
                  <Small>Text</Small>
                  <Muted>#1A1A2E</Muted>
                </div>
              </div>

              {/* UI Colors */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <div className="h-10 w-full rounded-md bg-card border"></div>
                    <div className="text-xs">Card</div>
                  </div>
                  <div>
                    <div className="h-10 w-full rounded-md bg-muted"></div>
                    <div className="text-xs">Muted</div>
                  </div>
                  <div>
                    <div className="h-10 w-full rounded-md bg-popover border"></div>
                    <div className="text-xs">Popover</div>
                  </div>
                  <div>
                    <div className="h-10 w-full rounded-md bg-destructive"></div>
                    <div className="text-xs">Destructive</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Heading Samples */}
          <section className="space-y-6">
            <H2>Headings</H2>
            <div className="space-y-4">
              <H1>Heading 1 - Sushi Shop</H1>
              <H2>Heading 2 - Fresh Japanese Cuisine</H2>
              <H3>Heading 3 - Delicious Sashimi & Maki</H3>
              <H4>Heading 4 - Specialty Rolls & Combos</H4>
            </div>
          </section>

          {/* Text Samples */}
          <section className="space-y-6">
            <H2>Text Components</H2>
            <div className="space-y-8">
              <div className="space-y-2">
                <SectionHeader 
                  title="Paragraph (P)" 
                  description="Standard body text used throughout the application"
                />
                <div className="rounded-lg border p-6">
                  <P>
                    Our sushi is made fresh daily with the finest ingredients. We source our fish from sustainable fisheries 
                    and use only traditional techniques to prepare our delicious offerings.
                  </P>
                  <P>
                    Each plate is artfully arranged to provide both visual appeal and optimal flavor combinations. 
                    Our chefs train for years to master the art of sushi-making.
                  </P>
                </div>
              </div>

              <div className="space-y-2">
                <SectionHeader 
                  title="Lead" 
                  description="Larger, more prominent paragraph text"
                />
                <div className="rounded-lg border p-6">
                  <Lead>
                    Experience the authentic taste of Japan with our carefully crafted sushi dishes, 
                    made with premium ingredients and expert technique.
                  </Lead>
                </div>
              </div>

              <div className="space-y-2">
                <SectionHeader 
                  title="Large, Small, and Muted Text" 
                  description="Various text sizes and emphasis"
                />
                <div className="rounded-lg border p-6 space-y-4">
                  <Large>
                    Large text for important information or highlights.
                  </Large>
                  <P>
                    Regular paragraph text for general content.
                  </P>
                  <Small>
                    Small text for secondary or supplementary details.
                  </Small>
                  <Muted>
                    Muted text for less important or auxiliary information.
                  </Muted>
                </div>
              </div>

              <div className="space-y-2">
                <SectionHeader 
                  title="Japanese Text" 
                  description="For authentic Japanese terms with proper font rendering"
                />
                <div className="rounded-lg border p-6">
                  <P>
                    We offer a variety of traditional items such as <Japanese>寿司</Japanese> (sushi), 
                    <Japanese>刺身</Japanese> (sashimi), and <Japanese>巻き</Japanese> (maki).
                  </P>
                  <P>
                    Our specialty is <Japanese>江戸前寿司</Japanese> (Edomae sushi), the original Tokyo-style sushi.
                  </P>
                </div>
              </div>
            </div>
          </section>

          {/* Blockquote Sample */}
          <section className="space-y-6">
            <H2>Blockquote</H2>
            <div className="rounded-lg border p-6">
              <Blockquote>
                "The true essence of sushi lies in the harmony of flavors, the freshness of ingredients, 
                and the skilled hands that bring them together."
                <div className="mt-2 font-semibold">— Master Chef Takahashi</div>
              </Blockquote>
            </div>
          </section>

          {/* List Samples */}
          <section className="space-y-6">
            <H2>Lists</H2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <H4>Ordered List</H4>
                <OrderedList>
                  <ListItem>Select your favorite sushi items</ListItem>
                  <ListItem>Add them to your cart</ListItem>
                  <ListItem>Review your order and apply any discounts</ListItem>
                  <ListItem>Choose delivery or pickup options</ListItem>
                  <ListItem>Complete your payment</ListItem>
                </OrderedList>
              </div>
              <div className="rounded-lg border p-6">
                <H4>Unordered List</H4>
                <UnorderedList>
                  <ListItem>Fresh salmon nigiri</ListItem>
                  <ListItem>Tuna sashimi</ListItem>
                  <ListItem>California roll</ListItem>
                  <ListItem>Dragon roll</ListItem>
                  <ListItem>Vegetable tempura</ListItem>
                </UnorderedList>
              </div>
            </div>
          </section>

          {/* Code Sample */}
          <section className="space-y-6">
            <H2>Inline Code</H2>
            <div className="rounded-lg border p-6">
              <P>
                You can use the <InlineCode>Japanese</InlineCode> component to properly render Japanese terms 
                like <InlineCode>&lt;Japanese&gt;寿司&lt;/Japanese&gt;</InlineCode> which outputs: <Japanese>寿司</Japanese>
              </P>
            </div>
          </section>

          {/* Typography in Context */}
          <section className="space-y-6">
            <H2>Typography in Context</H2>
            <div className="rounded-lg border p-6 space-y-6">
              <div>
                <H3>Sushi Lover's Guide</H3>
                <Lead className="mt-2">Discover the art and science behind perfect sushi.</Lead>
                <P className="mt-4">
                  Sushi is more than just food—it's an art form with centuries of tradition behind every bite. 
                  From the precise cutting techniques to the careful selection of fish, every element matters.
                </P>
                <Blockquote className="my-4">
                  "In Japan, sushi is more than a meal; it is an expression of cultural identity."
                </Blockquote>
                <P>
                  The term <Japanese>寿司</Japanese> (sushi) actually refers to the vinegared rice, not the fish itself.
                  Traditional Edomae sushi was originally a form of fast food in Tokyo (formerly Edo).
                </P>
                <H4 className="mt-6">Essential Sushi Types</H4>
                <UnorderedList>
                  <ListItem><Japanese>握り</Japanese> (Nigiri) - Fish on top of rice</ListItem>
                  <ListItem><Japanese>巻き</Japanese> (Maki) - Roll with seaweed outside</ListItem>
                  <ListItem><Japanese>軍艦</Japanese> (Gunkan) - "Battleship" style with nori wrapped around rice</ListItem>
                  <ListItem><Japanese>手巻き</Japanese> (Temaki) - Hand roll in cone shape</ListItem>
                </UnorderedList>
                <Small className="mt-4 block">
                  Photo credits: Our talented food photography team.
                </Small>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
