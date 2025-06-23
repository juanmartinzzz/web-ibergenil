import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const customerWebsiteId = import.meta.env.VITE_CUSTOMER_WEBSITE_ID;
const projectTablePrefix = import.meta.env.VITE_PROJECT_TABLE_PREFIX;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getContestData = async () => {
  const { data, error } = await supabase
    .from('customers_website_data')
    .select('*')
    .eq('customer_website_id', customerWebsiteId)
    .single();

  if (error) throw error;
  return data;
};

export const upsertContestData = async ({contestData}) => {
  const { data, error } = await supabase
    .from('customers_website_data')
    .upsert({
      customer_website_id: customerWebsiteId,
      data: contestData,
    }, {
      onConflict: 'customer_website_id',
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

const remote = {
  getAllCustomerRequestData: async () => {
    const { data, error } = await supabase
      .from(`${projectTablePrefix}_customer_request`)
      .select('*')
      .single();

    if (error) throw error;
    return data;
  },
  upsertCustomerRequestData: async ({ customerRequestData }) => {
    const { data, error } = await supabase
      .from(`${projectTablePrefix}_customer_request`)
      .upsert({ data: customerRequestData }, { onConflict: 'id' })
      .select()
      .single();

    if (error) throw error;

    return data;
  },
  getContestData,
  upsertContestData,
};

export default remote;