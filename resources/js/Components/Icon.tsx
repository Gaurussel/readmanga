import { lazy, Suspense } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { LucideProps } from 'lucide-react';
import styled from 'styled-components';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: keyof typeof dynamicIconImports;
}

const Icon = ({name, ...props}: IconProps) => {
    const LucideIcon = lazy(dynamicIconImports[name]);

    return (
        <Suspense fallback={fallback}>
            <LucideIcon {...props} />
        </Suspense>
    );
}

export default styled(Icon)`
    .la-fw {
        display: inline-flex;
        width: 1.25em;
        text-align: center;
    }
`;
