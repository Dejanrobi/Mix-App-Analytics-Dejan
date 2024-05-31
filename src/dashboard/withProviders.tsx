import React, { Component } from 'react';
import { WixDesignSystemProvider } from '@wix/design-system';
import { withDashboard } from '@wix/dashboard-react'
import { QueryClientProvider, QueryClient } from 'react-query';


const queryClient = new QueryClient();


export function withProviders<P extends {}={}>(Component: React.FC<P>){
    return withDashboard(function DashboardProviders(props: P){
        return (
            <WixDesignSystemProvider>
                <QueryClientProvider client={queryClient}>
                    <Component {...props} />
                </QueryClientProvider>
            </WixDesignSystemProvider>
        )
    })
}