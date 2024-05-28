const fs = require("fs");
const inquirer = require("inquirer");

const licenses = {
  "MIT": {
      badge: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
      text: `<details>
      <summary>MIT License</summary>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</details>`
  },
  "GPLv3": {
      badge: "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
      text: `<details>
      <summary>GNU LESSER GENERAL PUBLIC LICENSE</summary>
      <!-- empty line -->
      Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.


This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

0. Additional Definitions.

As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

"The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

1. Exception to Section 3 of the GNU GPL.

You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

2. Conveying Modified Versions.

If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

a) under this License, provided that you make a good faith effort to
ensure that, in the event an Application does not supply the
function or data, the facility still operates, and performs
whatever part of its purpose remains meaningful, or

b) under the GNU GPL, with none of the additional permissions of
this License applicable to that copy.

3. Object Code Incorporating Material from Library Header Files.

The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

a) Give prominent notice with each copy of the object code that the
Library is used in it and that the Library and its use are
covered by this License.

b) Accompany the object code with a copy of the GNU GPL and this license
document.

4. Combined Works.

You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

a) Give prominent notice with each copy of the Combined Work that
the Library is used in it and that the Library and its use are
covered by this License.

b) Accompany the Combined Work with a copy of the GNU GPL and this license
document.

c) For a Combined Work that displays copyright notices during
execution, include the copyright notice for the Library among
these notices, as well as a reference directing the user to the
copies of the GNU GPL and this license document.

d) Do one of the following:

0) Convey the Minimal Corresponding Source under the terms of this
License, and the Corresponding Application Code in a form
suitable for, and under terms that permit, the user to
recombine or relink the Application with a modified version of
the Linked Version to produce a modified Combined Work, in the
manner specified by section 6 of the GNU GPL for conveying
Corresponding Source.

1) Use a suitable shared library mechanism for linking with the
Library.  A suitable mechanism is one that (a) uses at run time
a copy of the Library already present on the user's computer
system, and (b) will operate properly with a modified version
of the Library that is interface-compatible with the Linked
Version.

e) Provide Installation Information, but only if you would otherwise
be required to provide such information under section 6 of the
GNU GPL, and only to the extent that such information is
necessary to install and execute a modified version of the
Combined Work produced by recombining or relinking the
Application with a modified version of the Linked Version. (If
you use option 4d0, the Installation Information must accompany
the Minimal Corresponding Source and Corresponding Application
Code. If you use option 4d1, you must provide the Installation
Information in the manner specified by section 6 of the GNU GPL
for conveying Corresponding Source.)

5. Combined Libraries.

You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

a) Accompany the combined library with a copy of the same work based
on the Library, uncombined with any other library facilities,
conveyed under the terms of this License.

b) Give prominent notice with the combined library that part of it
is a work based on the Library, and explaining where to find the
accompanying uncombined form of the same work.

6. Revised Versions of the GNU Lesser General Public License.

The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.</details>`
  },
  "GPL": {
      badge: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
      text: `<details>
      <summary>GNU GENERAL PUBLIC LICENSE</summary>
      Version 1, February 1989
      
      Copyright (C) 1989 Free Software Foundation, Inc. 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
      
      Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
      
      Preamble
      
      The license agreements of most software companies try to keep users at the mercy of those companies. By contrast, our General Public License is intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users. The General Public License applies to the Free Software Foundation's software and to any other program whose authors commit to using it. You can use it for your programs, too.
      
      When we speak of free software, we are referring to freedom, not price. Specifically, the General Public License is designed to make sure that you have the freedom to give away or sell copies of free software, that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs; and that you know you can do these things.
      
      To protect your rights, we need to make restrictions that forbid anyone to deny you these rights or to ask you to surrender the rights. These restrictions translate to certain responsibilities for you if you distribute copies of the software, or if you modify it.
      
      For example, if you distribute copies of a such a program, whether gratis or for a fee, you must give the recipients all the rights that you have. You must make sure that they, too, receive or can get the source code. And you must tell them their rights.
      
      We protect your rights with two steps: (1) copyright the software, and (2) offer you this license which gives you legal permission to copy, distribute and/or modify the software.
      
      Also, for each author's protection and ours, we want to make certain that everyone understands that there is no warranty for this free software. If the software is modified by someone else and passed on, we want its recipients to know that what they have is not the original, so that any problems introduced by others will not reflect on the original authors' reputations.
      
      The precise terms and conditions for copying, distribution and modification follow.
      
      GNU GENERAL PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
      
      0. This License Agreement applies to any program or other work which contains a notice placed by the copyright holder saying it may be distributed under the terms of this General Public License. The "Program", below, refers to any such program or work, and a "work based on the Program" means either the Program or any work containing the Program or a portion of it, either verbatim or with modifications. Each licensee is addressed as "you".
      1. You may copy and distribute verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this General Public License and to the absence of any warranty; and give any other recipients of the Program a copy of this General Public License along with the Program. You may charge a fee for the physical act of transferring a copy.
      2. You may modify your copy or copies of the Program or any portion of it, and copy and distribute such modifications under the terms of Paragraph 1 above, provided that you also do the following:
      a) cause the modified files to carry prominent notices stating that you changed the files and the date of any change; and
      b) cause the whole of any work that you distribute or publish, that in whole or in part contains the Program or any part thereof, either with or without modifications, to be licensed at no charge to all third parties under the terms of this General Public License (except that you may choose to grant warranty protection to some or all third parties, at your option).
      c) If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the simplest and most usual way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this General Public License.
      d) You may charge a fee for the physical act of transferring a copy, and you may at your option offer warranty protection in exchange for a fee.
      Mere aggregation of another independent work with the Program (or its derivative) on a volume of a storage or distribution medium does not bring the other work under the scope of these terms.
      
      3. You may copy and distribute the Program (or a portion or derivative of it, under Paragraph 2) in object code or executable form under the terms of Paragraphs 1 and 2 above provided that you also do one of the following:
      a) accompany it with the complete corresponding machine-readable source code, which must be distributed under the terms of Paragraphs 1 and 2 above; or,
      b) accompany it with a written offer, valid for at least three years, to give any third party free (except for a nominal charge for the cost of distribution) a complete machine-readable copy of the corresponding source code, to be distributed under the terms of Paragraphs 1 and 2 above; or,
      c) accompany it with the information you received as to where the corresponding source code may be obtained. (This alternative is allowed only for noncommercial distribution and only if you received the program in object code or executable form alone.)
      Source code for a work means the preferred form of the work for making modifications to it. For an executable file, complete source code means all the source code for all modules it contains; but, as a special exception, it need not include source code for modules which are standard libraries that accompany the operating system on which the executable file runs, or for standard header files or definitions files that accompany that operating system.
      
      4. You may not copy, modify, sublicense, distribute or transfer the Program except as expressly provided under this General Public License. Any attempt otherwise to copy, modify, sublicense, distribute or transfer the Program is void, and will automatically terminate your rights to use the Program under this License. However, parties who have received copies, or rights to use copies, from you under this General Public License will not have their licenses terminated so long as such parties remain in full compliance.
      5. By copying, distributing or modifying the Program (or any work based on the Program) you indicate your acceptance of this license to do so, and all its terms and conditions.
      6. Each time you redistribute the Program (or any work based on the Program), the recipient automatically receives a license from the original licensor to copy, distribute or modify the Program subject to these terms and conditions. You may not impose any further restrictions on the recipients' exercise of the rights granted herein.
      7. The Free Software Foundation may publish revised and/or new versions of the General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.
      Each version is given a distinguishing version number. If the Program specifies a version number of the license which applies to it and "any later version", you have the option of following the terms and conditions either of that version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the license, you may choose any version ever published by the Free Software Foundation.
      
      8. If you wish to incorporate parts of the Program into other free programs whose distribution conditions are different, write to the author to ask for permission. For software which is copyrighted by the Free Software Foundation, write to the Free Software Foundation; we sometimes make exceptions for this. Our decision will be guided by the two goals of preserving the free status of all derivatives of our free software and of promoting the sharing and reuse of software generally.
      NO WARRANTY
      
      9.
      BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
      
      10. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</details>`
  },
  "Unlicense": {
      badge: "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)",
      text: `<details>
      <summary>Unlicense</summary>
      This is free and unencumbered software released into the public domain.

      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
      
      For more information, please refer to <https://unlicense.org></details>`
  },
  "Creative Commons": {
      badge: "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)",
      text: `<details>
      <summary>Creative Commons Legal Code</summary>

      Attribution 3.0 Unported
      
          CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
          LEGAL SERVICES. DISTRIBUTION OF THIS LICENSE DOES NOT CREATE AN
          ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
          INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
          REGARDING THE INFORMATION PROVIDED, AND DISCLAIMS LIABILITY FOR
          DAMAGES RESULTING FROM ITS USE.
      
      License
      
      THE WORK (AS DEFINED BELOW) IS PROVIDED UNDER THE TERMS OF THIS CREATIVE
      COMMONS PUBLIC LICENSE ("CCPL" OR "LICENSE"). THE WORK IS PROTECTED BY
      COPYRIGHT AND/OR OTHER APPLICABLE LAW. ANY USE OF THE WORK OTHER THAN AS
      AUTHORIZED UNDER THIS LICENSE OR COPYRIGHT LAW IS PROHIBITED.
      
      BY EXERCISING ANY RIGHTS TO THE WORK PROVIDED HERE, YOU ACCEPT AND AGREE
      TO BE BOUND BY THE TERMS OF THIS LICENSE. TO THE EXTENT THIS LICENSE MAY
      BE CONSIDERED TO BE A CONTRACT, THE LICENSOR GRANTS YOU THE RIGHTS
      CONTAINED HERE IN CONSIDERATION OF YOUR ACCEPTANCE OF SUCH TERMS AND
      CONDITIONS.
      
      1. Definitions
      
       a. "Adaptation" means a work based upon the Work, or upon the Work and
          other pre-existing works, such as a translation, adaptation,
          derivative work, arrangement of music or other alterations of a
          literary or artistic work, or phonogram or performance and includes
          cinematographic adaptations or any other form in which the Work may be
          recast, transformed, or adapted including in any form recognizably
          derived from the original, except that a work that constitutes a
          Collection will not be considered an Adaptation for the purpose of
          this License. For the avoidance of doubt, where the Work is a musical
          work, performance or phonogram, the synchronization of the Work in
          timed-relation with a moving image ("synching") will be considered an
          Adaptation for the purpose of this License.
       b. "Collection" means a collection of literary or artistic works, such as
          encyclopedias and anthologies, or performances, phonograms or
          broadcasts, or other works or subject matter other than works listed
          in Section 1(f) below, which, by reason of the selection and
          arrangement of their contents, constitute intellectual creations, in
          which the Work is included in its entirety in unmodified form along
          with one or more other contributions, each constituting separate and
          independent works in themselves, which together are assembled into a
          collective whole. A work that constitutes a Collection will not be
          considered an Adaptation (as defined above) for the purposes of this
          License.
       c. "Distribute" means to make available to the public the original and
          copies of the Work or Adaptation, as appropriate, through sale or
          other transfer of ownership.
       d. "Licensor" means the individual, individuals, entity or entities that
          offer(s) the Work under the terms of this License.
       e. "Original Author" means, in the case of a literary or artistic work,
          the individual, individuals, entity or entities who created the Work
          or if no individual or entity can be identified, the publisher; and in
          addition (i) in the case of a performance the actors, singers,
          musicians, dancers, and other persons who act, sing, deliver, declaim,
          play in, interpret or otherwise perform literary or artistic works or
          expressions of folklore; (ii) in the case of a phonogram the producer
          being the person or legal entity who first fixes the sounds of a
          performance or other sounds; and, (iii) in the case of broadcasts, the
          organization that transmits the broadcast.
       f. "Work" means the literary and/or artistic work offered under the terms
          of this License including without limitation any production in the
          literary, scientific and artistic domain, whatever may be the mode or
          form of its expression including digital form, such as a book,
          pamphlet and other writing; a lecture, address, sermon or other work
          of the same nature; a dramatic or dramatico-musical work; a
          choreographic work or entertainment in dumb show; a musical
          composition with or without words; a cinematographic work to which are
          assimilated works expressed by a process analogous to cinematography;
          a work of drawing, painting, architecture, sculpture, engraving or
          lithography; a photographic work to which are assimilated works
          expressed by a process analogous to photography; a work of applied
          art; an illustration, map, plan, sketch or three-dimensional work
          relative to geography, topography, architecture or science; a
          performance; a broadcast; a phonogram; a compilation of data to the
          extent it is protected as a copyrightable work; or a work performed by
          a variety or circus performer to the extent it is not otherwise
          considered a literary or artistic work.
       g. "You" means an individual or entity exercising rights under this
          License who has not previously violated the terms of this License with
          respect to the Work, or who has received express permission from the
          Licensor to exercise rights under this License despite a previous
          violation.
       h. "Publicly Perform" means to perform public recitations of the Work and
          to communicate to the public those public recitations, by any means or
          process, including by wire or wireless means or public digital
          performances; to make available to the public Works in such a way that
          members of the public may access these Works from a place and at a
          place individually chosen by them; to perform the Work to the public
          by any means or process and the communication to the public of the
          performances of the Work, including by public digital performance; to
          broadcast and rebroadcast the Work by any means including signs,
          sounds or images.
       i. "Reproduce" means to make copies of the Work by any means including
          without limitation by sound or visual recordings and the right of
          fixation and reproducing fixations of the Work, including storage of a
          protected performance or phonogram in digital form or other electronic
          medium.
      
      2. Fair Dealing Rights. Nothing in this License is intended to reduce,
      limit, or restrict any uses free from copyright or rights arising from
      limitations or exceptions that are provided for in connection with the
      copyright protection under copyright law or other applicable laws.
      
      3. License Grant. Subject to the terms and conditions of this License,
      Licensor hereby grants You a worldwide, royalty-free, non-exclusive,
      perpetual (for the duration of the applicable copyright) license to
      exercise the rights in the Work as stated below:
      
       a. to Reproduce the Work, to incorporate the Work into one or more
          Collections, and to Reproduce the Work as incorporated in the
          Collections;
       b. to create and Reproduce Adaptations provided that any such Adaptation,
          including any translation in any medium, takes reasonable steps to
          clearly label, demarcate or otherwise identify that changes were made
          to the original Work. For example, a translation could be marked "The
          original work was translated from English to Spanish," or a
          modification could indicate "The original work has been modified.";
       c. to Distribute and Publicly Perform the Work including as incorporated
          in Collections; and,
       d. to Distribute and Publicly Perform Adaptations.
       e. For the avoidance of doubt:
      
           i. Non-waivable Compulsory License Schemes. In those jurisdictions in
              which the right to collect royalties through any statutory or
              compulsory licensing scheme cannot be waived, the Licensor
              reserves the exclusive right to collect such royalties for any
              exercise by You of the rights granted under this License;
          ii. Waivable Compulsory License Schemes. In those jurisdictions in
              which the right to collect royalties through any statutory or
              compulsory licensing scheme can be waived, the Licensor waives the
              exclusive right to collect such royalties for any exercise by You
              of the rights granted under this License; and,
         iii. Voluntary License Schemes. The Licensor waives the right to
              collect royalties, whether individually or, in the event that the
              Licensor is a member of a collecting society that administers
              voluntary licensing schemes, via that society, from any exercise
              by You of the rights granted under this License.
      
      The above rights may be exercised in all media and formats whether now
      known or hereafter devised. The above rights include the right to make
      such modifications as are technically necessary to exercise the rights in
      other media and formats. Subject to Section 8(f), all rights not expressly
      granted by Licensor are hereby reserved.
      
      4. Restrictions. The license granted in Section 3 above is expressly made
      subject to and limited by the following restrictions:
      
       a. You may Distribute or Publicly Perform the Work only under the terms
          of this License. You must include a copy of, or the Uniform Resource
          Identifier (URI) for, this License with every copy of the Work You
          Distribute or Publicly Perform. You may not offer or impose any terms
          on the Work that restrict the terms of this License or the ability of
          the recipient of the Work to exercise the rights granted to that
          recipient under the terms of the License. You may not sublicense the
          Work. You must keep intact all notices that refer to this License and
          to the disclaimer of warranties with every copy of the Work You
          Distribute or Publicly Perform. When You Distribute or Publicly
          Perform the Work, You may not impose any effective technological
          measures on the Work that restrict the ability of a recipient of the
          Work from You to exercise the rights granted to that recipient under
          the terms of the License. This Section 4(a) applies to the Work as
          incorporated in a Collection, but this does not require the Collection
          apart from the Work itself to be made subject to the terms of this
          License. If You create a Collection, upon notice from any Licensor You
          must, to the extent practicable, remove from the Collection any credit
          as required by Section 4(b), as requested. If You create an
          Adaptation, upon notice from any Licensor You must, to the extent
          practicable, remove from the Adaptation any credit as required by
          Section 4(b), as requested.
       b. If You Distribute, or Publicly Perform the Work or any Adaptations or
          Collections, You must, unless a request has been made pursuant to
          Section 4(a), keep intact all copyright notices for the Work and
          provide, reasonable to the medium or means You are utilizing: (i) the
          name of the Original Author (or pseudonym, if applicable) if supplied,
          and/or if the Original Author and/or Licensor designate another party
          or parties (e.g., a sponsor institute, publishing entity, journal) for
          attribution ("Attribution Parties") in Licensor's copyright notice,
          terms of service or by other reasonable means, the name of such party
          or parties; (ii) the title of the Work if supplied; (iii) to the
          extent reasonably practicable, the URI, if any, that Licensor
          specifies to be associated with the Work, unless such URI does not
          refer to the copyright notice or licensing information for the Work;
          and (iv) , consistent with Section 3(b), in the case of an Adaptation,
          a credit identifying the use of the Work in the Adaptation (e.g.,
          "French translation of the Work by Original Author," or "Screenplay
          based on original Work by Original Author"). The credit required by
          this Section 4 (b) may be implemented in any reasonable manner;
          provided, however, that in the case of a Adaptation or Collection, at
          a minimum such credit will appear, if a credit for all contributing
          authors of the Adaptation or Collection appears, then as part of these
          credits and in a manner at least as prominent as the credits for the
          other contributing authors. For the avoidance of doubt, You may only
          use the credit required by this Section for the purpose of attribution
          in the manner set out above and, by exercising Your rights under this
          License, You may not implicitly or explicitly assert or imply any
          connection with, sponsorship or endorsement by the Original Author,
          Licensor and/or Attribution Parties, as appropriate, of You or Your
          use of the Work, without the separate, express prior written
          permission of the Original Author, Licensor and/or Attribution
          Parties.
       c. Except as otherwise agreed in writing by the Licensor or as may be
          otherwise permitted by applicable law, if You Reproduce, Distribute or
          Publicly Perform the Work either by itself or as part of any
          Adaptations or Collections, You must not distort, mutilate, modify or
          take other derogatory action in relation to the Work which would be
          prejudicial to the Original Author's honor or reputation. Licensor
          agrees that in those jurisdictions (e.g. Japan), in which any exercise
          of the right granted in Section 3(b) of this License (the right to
          make Adaptations) would be deemed to be a distortion, mutilation,
          modification or other derogatory action prejudicial to the Original
          Author's honor and reputation, the Licensor will waive or not assert,
          as appropriate, this Section, to the fullest extent permitted by the
          applicable national law, to enable You to reasonably exercise Your
          right under Section 3(b) of this License (right to make Adaptations)
          but not otherwise.
      
      5. Representations, Warranties and Disclaimer
      
      UNLESS OTHERWISE MUTUALLY AGREED TO BY THE PARTIES IN WRITING, LICENSOR
      OFFERS THE WORK AS-IS AND MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY
      KIND CONCERNING THE WORK, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE,
      INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE, MERCHANTIBILITY,
      FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT, OR THE ABSENCE OF
      LATENT OR OTHER DEFECTS, ACCURACY, OR THE PRESENCE OF ABSENCE OF ERRORS,
      WHETHER OR NOT DISCOVERABLE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION
      OF IMPLIED WARRANTIES, SO SUCH EXCLUSION MAY NOT APPLY TO YOU.
      
      6. Limitation on Liability. EXCEPT TO THE EXTENT REQUIRED BY APPLICABLE
      LAW, IN NO EVENT WILL LICENSOR BE LIABLE TO YOU ON ANY LEGAL THEORY FOR
      ANY SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES
      ARISING OUT OF THIS LICENSE OR THE USE OF THE WORK, EVEN IF LICENSOR HAS
      BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      
      7. Termination
      
       a. This License and the rights granted hereunder will terminate
          automatically upon any breach by You of the terms of this License.
          Individuals or entities who have received Adaptations or Collections
          from You under this License, however, will not have their licenses
          terminated provided such individuals or entities remain in full
          compliance with those licenses. Sections 1, 2, 5, 6, 7, and 8 will
          survive any termination of this License.
       b. Subject to the above terms and conditions, the license granted here is
          perpetual (for the duration of the applicable copyright in the Work).
          Notwithstanding the above, Licensor reserves the right to release the
          Work under different license terms or to stop distributing the Work at
          any time; provided, however that any such election will not serve to
          withdraw this License (or any other license that has been, or is
          required to be, granted under the terms of this License), and this
          License will continue in full force and effect unless terminated as
          stated above.
      
      8. Miscellaneous
      
       a. Each time You Distribute or Publicly Perform the Work or a Collection,
          the Licensor offers to the recipient a license to the Work on the same
          terms and conditions as the license granted to You under this License.
       b. Each time You Distribute or Publicly Perform an Adaptation, Licensor
          offers to the recipient a license to the original Work on the same
          terms and conditions as the license granted to You under this License.
       c. If any provision of this License is invalid or unenforceable under
          applicable law, it shall not affect the validity or enforceability of
          the remainder of the terms of this License, and without further action
          by the parties to this agreement, such provision shall be reformed to
          the minimum extent necessary to make such provision valid and
          enforceable.
       d. No term or provision of this License shall be deemed waived and no
          breach consented to unless such waiver or consent shall be in writing
          and signed by the party to be charged with such waiver or consent.
       e. This License constitutes the entire agreement between the parties with
          respect to the Work licensed here. There are no understandings,
          agreements or representations with respect to the Work not specified
          here. Licensor shall not be bound by any additional provisions that
          may appear in any communication from You. This License may not be
          modified without the mutual written agreement of the Licensor and You.
       f. The rights granted under, and the subject matter referenced, in this
          License were drafted utilizing the terminology of the Berne Convention
          for the Protection of Literary and Artistic Works (as amended on
          September 28, 1979), the Rome Convention of 1961, the WIPO Copyright
          Treaty of 1996, the WIPO Performances and Phonograms Treaty of 1996
          and the Universal Copyright Convention (as revised on July 24, 1971).
          These rights and subject matter take effect in the relevant
          jurisdiction in which the License terms are sought to be enforced
          according to the corresponding provisions of the implementation of
          those treaty provisions in the applicable national law. If the
          standard suite of rights granted under applicable copyright law
          includes additional rights not granted under this License, such
          additional rights are deemed to be included in the License; this
          License is not intended to restrict the license of any rights under
          applicable law.
      
      
      Creative Commons Notice
      
          Creative Commons is not a party to this License, and makes no warranty
          whatsoever in connection with the Work. Creative Commons will not be
          liable to You or any party on any legal theory for any damages
          whatsoever, including without limitation any general, special,
          incidental or consequential damages arising in connection to this
          license. Notwithstanding the foregoing two (2) sentences, if Creative
          Commons has expressly identified itself as the Licensor hereunder, it
          shall have all rights and obligations of Licensor.
      
          Except for the limited purpose of indicating to the public that the
          Work is licensed under the CCPL, Creative Commons does not authorize
          the use by either party of the trademark "Creative Commons" or any
          related trademark or logo of Creative Commons without the prior
          written consent of Creative Commons. Any permitted use will be in
          compliance with Creative Commons' then-current trademark usage
          guidelines, as may be published on its website or otherwise made
          available upon request from time to time. For the avoidance of doubt,
          this trademark restriction does not form part of this License.
      
          Creative Commons may be contacted at https://creativecommons.org/.</details>`
  }
};

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? '
  },
  {
    type: 'input',
    name: 'fullName',
    message: 'Enter your full name:'
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?'
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'Why did you build this project?'
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?'
  },
  {
    type: 'input',
    name: 'learnings',
    message: 'What did you learn?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the URL for the github deployment?'
  },
  {
    type: 'list',
    choices: ["MIT", "GPLv3", "GPL", "Unlicense", "Creative Commons"],
    name: 'license',
    message: 'Choose a license from the list:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe the tests for the project:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'screenshotPath',
    message: 'Enter the relative path to the screenshot image (e.g., ./assets/images/Screenshot.png):'
  },
  {
    type: 'list',
    choices: ["Yes", "No"],
    name: 'ascii',
    message: 'Do you want ascii art?',
  }
]

inquirer.prompt(questions)
  .then((answers) => {
    let asciiArt = `<pre><font size="1">
8888888b.  888888888 Y88b   d88P  .d8888b.   .d8888b.       8888888b.  8888888b.   .d8888b.         d8888 888b     d888  .d8888b.  8888888b.  
888   Y88b 888        Y88b d88P  d88P  Y88b d88P  Y88b      888  "Y88b 888   Y88b d88P  Y88b       d88888 8888b   d8888 d88P  Y88b 888   Y88b 
888    888 888         Y88o88P   888    888 888    888      888    888 888    888      .d88P      d88P888 88888b.d88888      .d88P 888    888 
888   d88P 8888888b.    Y888P    888        888    888      888    888 888   d88P     8888"      d88P 888 888Y88888P888     8888"  888   d88P 
8888888P"       "Y88b    888     888        888    888      888    888 8888888P"       "Y8b.    d88P  888 888 Y888P 888      "Y8b. 8888888P"  
888               888    888     888    888 888    888      888    888 888 T88b   888    888   d88P   888 888  Y8P  888 888    888 888 T88b   
888        Y88b  d88P    888     Y88b  d88P Y88b  d88P      888  .d88P 888  T88b  Y88b  d88P  d8888888888 888   "   888 Y88b  d88P 888  T88b  
888         "Y8888P"     888      "Y8888P"   "Y8888P"       8888888P"  888   T88b  "Y8888P"  d88P     888 888       888  "Y8888P"  888   T88b 
</font></pre>`;

    let licenseText = licenses[answers.license].badge + "\n\n" + licenses[answers.license].text;
    let markDown = `# ${answers.title}

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)

## Below is a short description:

### What was your motivation?
${answers.motivation}

### Why did you build this project?
${answers.purpose}

### What problem does it solve?
${answers.problem}

### What did you learn?
${answers.learnings}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email](#email)

## Installation
${answers.installation}

## Usage

[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)

${answers.usage}

<video src="./Assets/Sequence_2.MP4" controls></video>

## License
${licenseText}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).

---

### Created by
${answers.fullName}

${answers.ascii === "Yes" ? asciiArt : ''}`;

    fs.writeFileSync("README.md", markDown);
    console.log("README generated successfully.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.error("An error occurred:", error);
    }
  });
