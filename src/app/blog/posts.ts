export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    slug: "forged-vs-plate-flanges-when-each-makes-sense",
    title: "Forged vs Plate Flanges: When Each Makes Sense",
    excerpt:
      "The production method behind a steel flange is a real engineering decision, not a cost line item. A walk through where forged ASME B16.5 wins, where plate-cut AWWA C207 wins, and where custom machining bridges the two.",
    category: "Production Methods",
    date: "2026-04-10",
    readTime: "11 min read",
    sections: [
      {
        paragraphs: [
          "The first question on most steel flange line items is the pressure class. The second is the material. The third, and the one most procurement specs skip past, is the production method. Forged or plate. That choice changes the grain structure of the part, the cost, the lead time, the largest diameter you can buy, and in some pressure-temperature combinations, whether the flange is actually qualified for the service at all. Treating forged and plate as interchangeable saves nothing and creates real risk on cyclic, sour, or high temperature lines.",
          "This is a working reference for engineers and buyers who have to make the call. It walks through what forged production actually buys you, what plate-cut production does well, where the two methods overlap in cost, and where each is the only correct answer. The shorthand at the bottom: forged is the default for B16.5 catalog sizes in cyclic and high pressure service. Plate is the default once you cross 24 inches and the application is structural, low cycle, or waterworks rated. Custom machining lives in between.",
        ],
      },
      {
        heading: "What Forging Actually Does to the Steel",
        paragraphs: [
          "A forged flange starts as a billet of carbon, alloy, or stainless steel. It is heated until plastic, then hammered or pressed in a closed die that approximates the flange shape. The deformation reorients the grain structure of the steel along the contour of the part. Grain flow that follows the load path resists fatigue cracking and shear far better than grain that runs perpendicular to it. On a weld neck flange this means the long axis of the hub, the path that pressure cycles drive against, has aligned grain. On a slip-on or blind flange the radial grain in the disc resists the bending that bolt-up imposes.",
          "Forging does not stop at the press. The forged blank is normalized or quench-and-tempered to develop the specified yield and toughness. It is then rough machined to remove forging scale and finished to ASME B16.5 dimensions. The machining envelope is small because the forged shape is already close to net. The finished flange carries a continuous grain that runs through the bolt circle, the hub, and the raised face as a single piece of metal. That is the metallurgical case for forging and the reason high pressure service specifications default to forged construction.",
          "The dimensional case is more pragmatic. ASME B16.5 covers forged sizes from 1/2 inch through 24 inch nominal pipe size at Class 150 through Class 2500. ASME B16.47 extends forged sizes through 60 inch in Class 75 through Class 900, with Series A and Series B covering different bolt patterns for retrofit and new construction. Forgings above 60 inch are possible but stop being a stocked item. The mill has to tool a custom die. Lead times stretch to months and minimum order quantities climb. Below 24 inch in any pressure class, forged is almost always the cheapest, fastest, and most documented path to a flange.",
        ],
      },
      {
        heading: "What Plate-Cut Production Does Differently",
        paragraphs: [
          "A plate-cut flange begins as rolled steel plate. The blank is laid out on the plate, cut by oxyfuel torch, plasma, or waterjet, then machined to final flange dimensions. The grain of the plate runs in the rolling direction, which means the grain in the finished flange is parallel to the disc face and not aligned with the hub. That is fine for static service. It is also fine for low cycle waterworks pressure. It is not what high pressure cyclic service wants on the hub.",
          "Plate-cut wins on size. Once a flange crosses 36 inch and especially above 60 inch, the forging path either becomes a special order or vanishes entirely. Plate steel is rolled in standard 8-foot, 10-foot, and 12-foot widths, with hot rolled plate available in thicknesses up to 12 inches and beyond. A 96 inch blind flange in 4 inch thick A516 Grade 70 plate is a routine cut. A 203 inch ring flange in 3 inch A36 plate is a routine cut for a project that has the layout space. Forging cannot match that size envelope without bespoke tooling.",
          "Plate also wins on configuration flexibility. AWWA C207 covers steel ring flanges in Class B, D, E, and F for waterworks service, with thicknesses and bolt patterns sized to working pressures from 86 psi through 300 psi. The standard is built around plate-cut construction. Custom bores, custom bolt circles, overbore conditions, and special facings can all be cut into a plate flange without the long tool-up that a forged custom would demand. For pipeline service, MSS SP-44 governs forged flanges in API 5L pipe sizes through 60 inch in API pipeline pressure ratings, and many of those flanges are made by forging blanks that are then machined to SP-44 dimensions. The boundary between forged and plate-cut is not always crisp at the largest sizes.",
        ],
      },
      {
        heading: "Pressure-Temperature Boundaries",
        paragraphs: [
          "Pressure ratings drop as temperature rises. A Class 300 A105 weld neck flange holds 720 psi at 100 degrees F and drops to 365 psi at 850 degrees F. The same dimensional flange in A350 LF2 holds the same room-temperature pressure but stops being qualified below minus 50 degrees F unless the LF2 is supplemented with charpy impact testing at the design minimum temperature. Plate-cut equivalents track the same standards when they are dimensionally identical to forged. Where plate-cut diverges is in pressure rating practice for waterworks.",
          "AWWA C207 Class B is rated to 86 psi working pressure, Class D is 175 psi, Class E is 275 psi, and Class F is 300 psi. Those numbers are deliberately conservative for municipal water service, where pressure surge from valve closure and pump trip dwarfs static head. An AWWA Class D flange is dimensionally and structurally robust for far higher static pressure than its rating implies, but the rating is the rating. You do not put an AWWA C207 Class D flange on a 400 psi steam line and call it qualified. For steam, oil and gas, and chemical process pressure service, the ASME B16.5 or B16.47 forged rating is the governing document.",
          "The crossover question is what pressure class to spec on large diameter water service. If a 48 inch transmission main is rated to 250 psi working with 350 psi surge, AWWA C207 Class E in A36 plate covers it. If the same 48 inch main is part of a high pressure pump station running 350 psi continuous, the project moves to MSS SP-44 carbon steel or to a heavier custom plate-cut design with documented stress analysis. The decision is a function of static pressure, surge, and what NDE the owner wants on the welds.",
        ],
      },
      {
        heading: "Cost, Lead Time, and the Crossover Zone",
        paragraphs: [
          "For catalog ASME B16.5 sizes from 1/2 inch through 24 inch, forged carbon steel is essentially commodity. A Class 150 A105 weld neck in 6 inch is a stock item with a unit cost in single digit dollars at quantity. Plate-cut equivalents at that size do not exist as a competitive product. Even at 24 inch Class 300, the forged path is faster and cheaper than rolling and cutting plate.",
          "The crossover starts at 26 inch and accelerates above 36 inch. ASME B16.47 forged is available through 60 inch but the cost curve gets steep above 42 inch in higher pressure classes. Plate-cut becomes price competitive once the forged option requires special order tooling. By 60 inch in Class 300, plate-cut from A516-70 with full machining is typically the value path even if a forged version is technically available. Above 60 inch, plate-cut is the only stocked production method outside of full custom forging.",
          "Lead time is the other half of the equation. Stock B16.5 forged flanges are next-day in most carbon grades and within a week for most stainless and chrome-moly. Custom forged work and B16.47 over 42 inch can run multiple weeks to multiple months depending on grade and pressure class. Plate-cut work scales with cutting and machining capacity rather than mill tooling, which means a 96 inch ring flange in A516 carbon plate moves through fabrication in a far more predictable schedule than the equivalent custom forging. For projects with hard mechanical completion dates, that predictability is worth real money.",
        ],
      },
      {
        heading: "Decision Shorthand",
        paragraphs: [
          "Pick forged when the line is 24 inches or smaller, when the service is cyclic or high pressure or high temperature, when the spec calls B16.5 or MSS SP-44 by name, when the design temperature is below minus 20 degrees F and you need A350 LF2 charpy data, or when sour service NACE MR0175 hardness control is required. The forged process is qualified for these conditions and the supply chain is set up to deliver.",
          "Pick plate-cut when the diameter pushes past 30 inch, when the service is waterworks under AWWA C207, when the application is structural or tank flange work without pressure cycling, when you need a custom bore or non-catalog bolt circle, or when the project schedule cannot absorb a forged mill lead time. Plate is the right choice on large diameter and it is the only choice above 60 inch outside of bespoke forging.",
          "Custom machining lives between the two. A hubbed plate flange, a forged blank machined to a non-catalog dimension, a counterbored RTJ retrofit on an existing forged flange, a weld overlay on a carbon flange to add stainless corrosion resistance at the gasket face, all live in the custom machining domain. That work runs parallel to both standard production paths and is sized by the job, not the catalog. Call (281) 484-8325 with the dimensions and the service and we will walk you through which production method belongs on which line.",
        ],
      },
    ],
  },
  {
    slug: "a105-vs-a694-high-yield-carbon-the-real-difference",
    title: "A105 vs A694 High-Yield Carbon: The Real Difference",
    excerpt:
      "ASTM A105 and A694 are both carbon steel forgings, but the mechanical and metallurgical difference between them is the difference between general industrial service and pipeline-rated high pressure construction. What changes, why it matters, and when to push back on a spec.",
    category: "Materials",
    date: "2026-03-28",
    readTime: "12 min read",
    sections: [
      {
        paragraphs: [
          "Carbon steel is the workhorse grade for industrial flanges. It covers the majority of the catalog and the majority of installed service. Inside that one word category, however, are two specifications that look similar on paper and behave very differently in the field. ASTM A105 is the general purpose forged carbon flange grade. ASTM A694 is a family of high-yield carbon grades engineered to mate to API 5L pipeline pipe. They overlap in chemistry, they part ways on mechanical properties, and they belong on different line items.",
          "This walks through what A105 actually is, what each A694 grade actually delivers, where the two specifications govern, and how to recognize when a spec has called for the wrong one. The result is not academic. Putting A105 on a Class 600 pipeline service that wants A694 F60 is a real failure mode. Putting A694 on a Class 150 utility air header is just expensive.",
        ],
      },
      {
        heading: "What A105 Actually Specifies",
        paragraphs: [
          "ASTM A105 is the standard specification for carbon steel forgings for piping applications. The grade has a single mechanical property set: minimum yield strength of 36 ksi (250 MPa), minimum tensile strength of 70 ksi (485 MPa), minimum elongation of 22 percent, and minimum reduction of area of 30 percent. The chemistry is moderately specified, with carbon capped at 0.35 percent, manganese in the 0.60 to 1.05 range, and limits on phosphorus, sulfur, silicon, copper, nickel, chromium, molybdenum, and vanadium. The carbon equivalent is capped at 0.47 when phosphorus and sulfur are each at 0.025 or below.",
          "A105 is normalize-capable but not normalize-required. Most stock A105 ships as-forged with mill heat treatment that targets the property minima. The grade is not impact-tested by default. It is not pressure-rated at low temperature. ASME B31.3 limits A105 to a minimum design metal temperature of minus 20 degrees F without impact testing. Below that, the spec wants A350 LF2 with charpy data at the design temperature. A105 is also not hardness-controlled for sour service. NACE MR0175 sour service applications want A105 with supplementary hardness testing at 187 HB maximum, and most stock A105 will not meet that without rework.",
          "Where A105 lives is on standard B16.5 and B16.47 Series A forged flanges in Class 150 through Class 2500, on socket weld and threaded fittings under B16.11, and on long-weld-neck and reducing flanges. It mates correctly to API 5L Grade B pipe, which has 35 ksi minimum yield. It does not mate correctly to API 5L X-grade pipe, which has higher yields starting at 42 ksi for X42 and climbing through X80. When the pipe gets stronger than the flange, the flange becomes the weak link. That is the failure mode A694 was specified to prevent.",
        ],
      },
      {
        heading: "The A694 Family",
        paragraphs: [
          "ASTM A694 covers carbon and alloy steel forgings for pipe flanges, fittings, valves, and parts for high-pressure transmission service. The grade is structured as a family. The grade designation is the letter F followed by the minimum yield strength in ksi: F42, F46, F48, F50, F52, F56, F60, F65, F70. F42 has a minimum yield of 42 ksi. F60 has a minimum yield of 60 ksi. F70 sits at 70 ksi minimum yield with a tensile strength of 85 ksi minimum. The chemistry varies by grade and is more tightly controlled than A105, with explicit limits on carbon, manganese, silicon, nickel, chromium, molybdenum, copper, niobium, vanadium, and titanium.",
          "A694 is normalize-and-temper or quench-and-temper heat treated to develop the elevated yield. The heat treatment is not optional. The grain structure that results carries the higher strength while keeping toughness adequate for transmission pipeline service. Charpy V-notch impact testing is required on A694 grades F52 and above at a test temperature specified by the purchase order, with minimum energy values that scale with the grade. F65 and F70 typically test at minus 50 degrees F or lower depending on the project location. Hardness is also controlled, with maximum hardness for sour service applications running 248 HV10 (about 235 HB) or lower depending on the NACE annex called out.",
          "Where A694 lives is on MSS SP-44 pipeline flanges and on B16.47 flanges in transmission pipeline service. MSS SP-44 covers steel pipeline flanges in sizes 10 inch through 60 inch at API class ratings 150, 300, 400, 600, 900, and 1500. The mating pipe is API 5L X-grade, with X42 through X70 covering the most common combinations. A694 F42 mates to X42, F52 to X52, F60 to X60, F65 to X65, F70 to X70. The match is intentional. Flange yield meets or slightly exceeds pipe yield at every grade in the system.",
        ],
      },
      {
        heading: "Where the Two Standards Govern",
        paragraphs: [
          "ASME B16.5 dimensions and B16.47 dimensions are the same whether the flange is A105 or A694 of the same nominal pressure class. A 12 inch Class 600 raised face weld neck flange has the same outside diameter, bolt circle, bolt count, hub thickness, and raised face dimensions regardless of carbon grade. That dimensional sameness is what allows specifications to call either grade onto the same drawing. The difference is metallurgical and mechanical, not dimensional.",
          "Pressure-temperature ratings are a different matter. A105 in Class 600 holds 1440 psi at 100 degrees F. A694 F60 in Class 600 also holds 1440 psi at 100 degrees F by the standard B16.5 rating tables. The standard rating numbers do not change with the higher yield. Where the higher yield buys design margin is in pipeline practice, where the actual pipeline operating pressure is often calculated against the pipe yield directly and the flange is required to match that yield. A pipeline operating at 1100 psi based on X60 pipe wall thickness wants a flange whose specified minimum yield is at least 60 ksi, which is A694 F60, not A105.",
          "ASME B31.4 and ASME B31.8 are the governing codes for liquid hydrocarbon pipelines and gas transmission pipelines respectively. Both codes drive flange selection through pipe matching. A B31.8 gas transmission line operating at 1100 psi on X60 pipe with a design factor of 0.72 wants flanges qualified for the service. MSS SP-44 in A694 F60 is the qualified product. ASME B16.5 in A105 is not the qualified product even though the dimensional class number reads the same.",
        ],
      },
      {
        heading: "Specifying Across Grades",
        paragraphs: [
          "The first thing to confirm on any flange line item is the mating pipe grade. If the pipe is API 5L Grade B (35 ksi yield), A105 is the correct flange grade. If the pipe is API 5L X42, X46, X52, X56, X60, X65, X70, or X80, the flange grade should be the matching A694 F-grade or one level above. Mismatch in either direction creates a failure mode. Flange weaker than pipe is the obvious one. Flange much stronger than pipe is the less obvious one, where the bolt-up stress field in the flange transfers into the pipe wall and creates local strain concentration at the weld.",
          "The second thing to confirm is the impact requirement. If the design minimum temperature is minus 20 degrees F or warmer, A105 with no impact testing is qualified. If the design minimum temperature is colder, A350 LF2 (carbon, low-temperature, impact-tested) is the right product, and A105 should not be substituted. A694 above F52 carries default impact requirements, but the test temperature must be specified on the purchase order. Field crews calling out 'A694 F60' without a test temperature will get whatever the mill last produced, which may or may not be qualified for the design.",
          "The third thing to confirm is sour service and NACE compliance. NACE MR0175 covers materials for oil and gas service that contains hydrogen sulfide above 0.05 psi partial pressure. The standard limits hardness for steels in contact with sour environments. A105 and A694 can both meet the hardness limits with supplementary testing, but neither does it by default. The flange purchase order has to call out NACE compliance explicitly and require hardness testing on every heat lot. Without that callout, the supplier ships standard product and the sour service requirement is not met.",
        ],
      },
      {
        heading: "When to Push Back on a Spec",
        paragraphs: [
          "A spec that calls A105 on a Class 600 or higher MSS SP-44 pipeline flange is almost always wrong. The flange should be A694 of a grade matching the pipe. Push back, ask for the pipe spec, and confirm the grade against the API 5L grade. A spec that calls A694 F70 on a small bore Class 150 utility line is also almost always wrong, just expensively wrong. The high-yield grade has no value at Class 150 pressure ratings and adds material cost, lead time, and a probably-unnecessary charpy test record. Push back, ask what the engineer was matching to, and offer A105 with the correct standard testing.",
          "A spec that calls A105 for a minus 40 degree F design temperature is wrong. The right grade is A350 LF2 with charpy impact testing at the design temperature or colder. Substituting A105 because it is in stock is a code violation. A spec that calls A694 F52 for a sour service line without specifying NACE hardness testing is incomplete. The flange will likely ship over-hardness and fail post-weld hardness mapping. Push back, ask for the hydrogen sulfide partial pressure, and require NACE supplementary testing on the purchase order.",
          "These calls are part of the job. Carbon steel grades look interchangeable on a one-line bill of materials, and they are not. Call (281) 484-8325 with the line spec or send the pipe class and mating pipe grade by email and we will confirm which carbon grade belongs on the flange order before it ships. Catching the substitution at the order stage is much cheaper than catching it at receiving inspection or, worse, after the line is in service.",
        ],
      },
    ],
  },
  {
    slug: "custom-large-diameter-flanges-what-to-spec-beyond-the-catalog",
    title: "Custom Large-Diameter Flanges: What to Spec Beyond the Catalog",
    excerpt:
      "ASME B16.5 stops at 24 inch. B16.47 stops at 60 inch. AWWA C207 stops at 144 inch. So what about the 80, 96, 144, and 203 inch flanges sitting in tank farms, vacuum chambers, and ship hatches? A practical guide to specifying steel flanges past the catalog.",
    category: "Custom Work",
    date: "2026-03-12",
    readTime: "12 min read",
    sections: [
      {
        paragraphs: [
          "Most steel flange catalogs end at 60 inch. ASME B16.5 covers 1/2 inch through 24 inch. ASME B16.47 Series A and B cover 26 inch through 60 inch. AWWA C207 covers ring flanges through 144 inch for waterworks. Beyond those limits, the flange is custom work and the catalog is no longer the document. The drawing is the document. Getting that drawing right requires understanding what changes as the diameter climbs.",
          "Custom large-diameter steel flanges show up in tank fabrication, vacuum and pressure vessel construction, hydroelectric and water transmission, dredge and marine work, and on the largest pieces of mechanical equipment built. A 96 inch blind flange on a vacuum chamber, a 144 inch ring flange on a tank, a 203 inch transition flange between a steel pipe and a concrete cylinder pipe segment, all live outside the standard reference tables. This walks through what has to be on the drawing, where the metallurgical decisions matter, and what to leave to the supplier to confirm.",
        ],
      },
      {
        heading: "Plate Selection Drives the Design",
        paragraphs: [
          "Custom large-diameter flanges are almost always cut from rolled steel plate. The plate grade sets the strength, toughness, and weldability of the finished flange. ASTM A516 Grade 70 is the workhorse for pressure-rated plate. It has a minimum yield of 38 ksi, minimum tensile of 70 ksi, and standard practice includes normalizing for sections over 1.5 inch thickness. A516-70 is qualified for pressure service under ASME Section VIII and is the default plate for a pressure-rated blind or ring flange.",
          "ASTM A36 carbon plate is the structural workhorse. It has a minimum yield of 36 ksi and is not pressure-qualified by default. A36 is the right plate for structural ring flanges, tank flanges, and AWWA C207 flanges where the working pressure is bounded by the standard rather than by an ASME pressure code calculation. A516-70 and A36 are not interchangeable. A36 should never substitute for A516-70 on a pressure-rated drawing, and A516-70 is expensive overkill on a structural drawing.",
          "ASTM A350 LF2 in plate form is available for low-temperature pressure service down to minus 50 degrees F with charpy impact testing. A516-70 with supplementary impact testing per ASME Section VIII covers similar territory. For sour service, A516-70 modified with reduced sulfur and supplementary NACE hardness testing is the qualified product. For cryogenic service below minus 50 degrees F, the plate options shift to ASTM A203 nickel-bearing grades, with A203 Grade D at 3.5 percent nickel for service down to minus 150 degrees F. The grade decision on a custom flange is made before the dimensional drawing is finalized.",
        ],
      },
      {
        heading: "Cutting, Machining, and Drilling at Scale",
        paragraphs: [
          "A 96 inch flange is laid out on plate from the centerline of the bore. The outside diameter is scribed, the bolt circle is scribed, the bolt holes are spotted, and the bore is scribed. Modern shops use CNC plasma or waterjet for the rough cut and CNC mill for the bore, bolt holes, and facing. The cut precision and the machining precision both fall under fabrication tolerance. AWWA C207 allows plus or minus 1/8 inch on outside diameter for flanges over 30 inch, and bolt circle tolerance follows the standard band. ASME B16.47 has tighter dimensional tolerances even on Series B and the standard sets explicit values for hub bore, hub thickness, and facing flatness.",
          "Custom flanges that fall outside any published standard live by the drawing tolerance. A common project requirement is to drill the bolt pattern on the flange and on the mating component as a matched set to ensure alignment. For a 144 inch flange with a 48-bolt or 60-bolt pattern, a matched-set drill is not optional. Drift pin holes are commonly added at four to eight equally spaced locations to allow field alignment before the bolts are tensioned. The drift pin diameter and tolerance is specified on the drawing and is typically one to two sizes larger than the bolt to allow for thermal differential and fabrication drift.",
          "Facing is the next dimensional question. A raised face on a 96 inch flange is typically 1/4 inch tall at Class 150 equivalent rating and 1/2 inch tall at higher equivalents. A flat face is used where the mating component is rubber-lined or where a full-face gasket is required. A tongue-and-groove or ring-type-joint (RTJ) face is uncommon at this scale but available where the service pressure justifies it. Weld neck hubs on plate flanges are typically rolled from plate, formed to the hub profile, and welded to the flange face. Cast hub options exist for the largest sizes but are project-specific.",
        ],
      },
      {
        heading: "Bolt Patterns at the Largest Sizes",
        paragraphs: [
          "Bolt count climbs with diameter. A 24 inch Class 150 flange has 20 bolts. A 48 inch flange in equivalent rating has 44 bolts. A 96 inch ring flange in AWWA C207 Class D has 92 bolts. A 144 inch ring flange has 132 bolts. The bolt size also climbs, from 1 inch on the smaller flanges to 1-1/2 inch or 1-3/4 inch on the largest. Bolt tensioning at this scale uses hydraulic tensioners with simultaneous multi-stud operation. Hand-torquing is not practical on the larger sizes and the bolt-up procedure on the drawing should specify the tensioning method.",
          "Stud grade is part of the bolt pattern decision. ASTM A193 B7 carbon-alloy studs are the default for non-corrosive service. A193 B7M is the supplementary hardness-controlled variant for sour service. A193 B8 and B8M are austenitic stainless variants for corrosive or temperature-cycling service. The stud diameter and grade combination determines the achievable preload. On a 96 inch Class 300 equivalent flange, the bolt preload required to seat a 1/8 inch thick spiral wound gasket runs into the hundreds of thousands of pounds total across all studs. The preload calculation is part of the flange design package and should be reviewed during procurement.",
          "Nut and washer selection follows the stud. ASTM A194 Grade 2H heavy hex nuts mate to B7 studs. A194 Grade 7 mates to B8M. Hardened washers per ASTM F436 are used where the bolt-up pressure approaches the bearing yield of the flange surface. For the largest flanges, the bolt material specification, the nut material specification, the washer specification, and the gasket specification should all appear on the drawing or in the bill of materials.",
        ],
      },
      {
        heading: "NDE and Documentation",
        paragraphs: [
          "Non-destructive examination of custom large-diameter flanges scales with the service. For ASME Section VIII pressure-rated flanges, ultrasonic testing (UT) of the plate at the bolt circle and hub regions is standard, and magnetic particle testing (MT) or liquid penetrant testing (PT) of the machined surfaces is common. The acceptance criteria are typically called out by the ASME Section VIII division applicable to the equipment. AWWA C207 ring flanges in standard service typically only require visual examination per the standard, although some owners specify supplementary UT or MT at additional cost.",
          "Welded hub configurations require additional NDE at the hub-to-flange weld. Full penetration weld with 100 percent radiographic testing or 100 percent UT is the standard for pressure-rated weld-neck plate flanges. The weld procedure specification, the welder qualification record, and the NDE reports become part of the documentation package that ships with the flange. Material test reports (MTRs) on the plate are non-negotiable. For domestic-melt requirements under Buy American, AIS, BABA, or ARRA funding, the MTR must show domestic melt and pour and the mill certification must trace to a domestic mill. That documentation requirement should be on the purchase order and reflected on the drawing.",
          "For sour service under NACE MR0175 or NACE MR0103, hardness mapping of the flange after final heat treatment and after any post-weld treatment is required. The map shows hardness readings at specified locations across the flange face, hub, and bolt circle, with acceptance criteria from the governing NACE annex. A flange that passes hardness on initial inspection can fail after field welding if the weld procedure introduces hardness above the limit, so the procedure for any field welding should also be NACE-qualified.",
        ],
      },
      {
        heading: "What to Put on the Purchase Order",
        paragraphs: [
          "A complete custom large-diameter flange purchase order includes: outside diameter and tolerance, inside diameter (bore) and tolerance, thickness and tolerance, bolt circle diameter and tolerance, bolt hole quantity and diameter and tolerance, bolt hole positioning (straddle or off-center relative to the principal axis), facing type and dimensions, hub configuration if any (weld neck, slip-on, blind), plate material specification including grade and supplementary requirements, heat treatment condition, NDE requirements at the plate stage and the finished part stage, MTR requirements including domestic-melt callout if applicable, and any project-specific certifications including NACE compliance, charpy impact testing, or third-party inspection.",
          "Drawing approval is typically a two-step process for the largest sizes. A preliminary drawing goes from the supplier to the engineer for dimensional and metallurgical approval before the plate is cut. A final drawing including any field-fit revisions accompanies the finished part on delivery. Both drawings become part of the project record and stay with the flange through its service life. The engineering hours that go into a custom 144 inch flange drawing run well into the dozens, and that engineering is part of what the purchase order is buying.",
          "Schedule on custom large-diameter work is driven by plate availability, machining capacity, and NDE turnaround. Stock plate in standard grades is usually available within a few weeks. Special grades, low-sulfur heats, or supplementary impact-tested plate run longer. The machining and NDE steps are predictable once the plate is in the shop. For projects with hard mechanical completion dates, the right move is to engage the supplier early, lock the drawing, and order the plate against the drawing rather than against a placeholder. Call (281) 484-8325 with the application, dimensions, and service conditions and we will walk through the drawing, the plate selection, and the documentation package that the project will need.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
