import Link from "next/link";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h1 className="mb-10 mt-3   text-3xl font-bold">
        Website Terms and Conditions of Use
      </h1>

      <h2 className="mb-2 text-2xl font-semibold">1. Terms</h2>

      <p>
        By accessing this Website, accessible from{" "}
        <Link
          className="font-bold text-blue-400 hover:text-blue-500"
          href="https://gpts-store.net/"
        >
          https://gpts-store.net/
        </Link>{" "}
        , you are agreeing to be bound by these Website Terms and Conditions of
        Use and agree that you are responsible for the agreement with any
        applicable local laws. If you disagree with any of these terms, you are
        prohibited from accessing this site. The materials contained in this
        Website are protected by copyright and trade mark law.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">2. Use License</h2>

      <p>
        Permission is granted to temporarily download one copy of the materials
        on GPTs-store&apos;s Website for personal, non-commercial transitory
        viewing only. This is the grant of a license, not a transfer of title,
        and under this license you may not:
      </p>

      <ul className="mb-6 mt-3 list-disc pl-5">
        <li className="mb-2">modify or copy the materials;</li>
        <li className="mb-2">
          use the materials for any commercial purpose or for any public
          display;
        </li>
        <li className="mb-2">
          attempt to reverse engineer any software contained on
          GPTs-store&apos;s Website;
        </li>
        <li className="mb-2">
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li className="mb-2">
          transferring the materials to another person or &quot;mirror&quot; the
          materials on any other server.
        </li>
      </ul>

      <p>
        This will let GPTs-store to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format. These Terms of
        Service has been created with the help of the{" "}
        <a href="https://www.termsofservicegenerator.net">
          Terms Of Service Generator
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">3. Disclaimer</h2>

      <p>
        All the materials on GPTs-store&apos;s Website are provided &quot;as
        is&quot;. GPTs-store makes no warranties, may it be expressed or
        implied, therefore negates all other warranties. Furthermore, GPTs-store
        does not make any representations concerning the accuracy or reliability
        of the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">4. Limitations</h2>

      <p>
        GPTs-store or its suppliers will not be hold accountable for any damages
        that will arise with the use or inability to use the materials on
        GPTs-store&apos;s Website, even if GPTs-store or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">5. Revisions and Errata</h2>

      <p>
        The materials appearing on GPTs-store&apos;s Website may include
        technical, typographical, or photographic errors. GPTs-store will not
        promise that any of the materials in this Website are accurate,
        complete, or current. GPTs-store may change the materials contained on
        its Website at any time without notice. GPTs-store does not make any
        commitment to update the materials.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">6. Links</h2>

      <p>
        GPTs-store has not reviewed all of the sites linked to its Website and
        is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by GPTs-store of the
        site. The use of any linked website is at the user&apos;s own risk.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        7. Site Terms of Use Modifications
      </h2>

      <p>
        GPTs-store may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">8. Your Privacy</h2>

      <p>Please read our Privacy Policy.</p>

      <h2 className="mb-2 text-2xl font-semibold">9. Governing Law</h2>

      <p>
        Any claim related to GPTs-store&apos;s Website shall be governed by the
        laws of cn without regards to its conflict of law provisions.
      </p>
    </div>
  );
}
